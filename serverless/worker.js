// Cloudflare Worker: Receive multipart/form-data, then send email with attachment via Resend.
// Environment variables (bind in Cloudflare):
// - RESEND_API_KEY (secret)
// - FROM_EMAIL (verified sender in Resend)
// - TO_EMAIL (your inbox)
// - ALLOWED_ORIGINS (comma-separated), e.g.,
//   https://peiqil.com,https://george121380.github.io,http://localhost:8080
//   (Backward compatible: if missing, falls back to ALLOWED_ORIGIN)
// - MAX_FILE_BYTES (optional, default 10485760 for 10MB)

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return handleOptions(request, env);
    }

    if (request.method === 'POST' && url.pathname === '/api/send') {
      return handleSend(request, env);
    }

    const allowed = getAllowedOrigin(request, env);
    return withCors(new Response('Not found', { status: 404 }), allowed);
  }
}

function withCors(response, allowedOrigin) {
  if (allowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
  }
  response.headers.set('Vary', 'Origin');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

function handleOptions(request, env) {
  // CORS preflight response
  const allowed = getAllowedOrigin(request, env);
  if (!allowed) {
    return new Response('Forbidden origin', { status: 403 });
  }
  const resp = new Response(null, { status: 204 });
  return withCors(resp, allowed);
}

async function handleSend(request, env) {
  try {
    const allowed = getAllowedOrigin(request, env);
    if (!allowed) {
      return withCors(new Response('Forbidden origin', { status: 403 }), allowed);
    }

    const form = await request.formData();
    const file = form.get('file');
    const note = form.get('note') || '';

    if (!(file instanceof File)) {
      return withCors(new Response('Missing file', { status: 400 }), allowed);
    }

    const maxBytes = parseInt(env.MAX_FILE_BYTES || '10485760', 10); // default 10MB
    if (file.size > maxBytes) {
      return withCors(new Response('File too large', { status: 413 }), allowed);
    }

    const allowedMime = new Set([
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/pdf'
    ]);
    const allowedExt = new Set(['.ppt', '.pptx', '.pdf']);
    const nameLower = (file.name || '').toLowerCase();
    const extOk = [...allowedExt].some(ext => nameLower.endsWith(ext));
    const mimeOk = allowedMime.has(file.type || '');
    if (!mimeOk && !extOk) {
      return withCors(new Response('Unsupported file type', { status: 415 }), allowed);
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64Content = toBase64(arrayBuffer);

    const subject = `Website upload: ${file.name || 'file'}`;
    const text = `A file was uploaded from the personal site.\n\nNote: ${String(note || '')}\nSize: ${file.size} bytes`;

    const payload = {
      from: env.FROM_EMAIL,
      to: env.TO_EMAIL,
      subject,
      text,
      attachments: [
        {
          filename: file.name || 'upload',
          content: base64Content
        }
      ]
    };

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const msg = await res.text().catch(() => '');
      return withCors(new Response(`Email send failed: ${msg}`, { status: 502 }), allowed);
    }

    return withCors(new Response('OK', { status: 200 }), allowed);
  } catch (err) {
    const allowed = getAllowedOrigin(request, env);
    return withCors(new Response('Server error', { status: 500 }), allowed);
  }
}

function getAllowedOrigin(request, env) {
  const origin = request.headers.get('Origin') || '';
  const list = (env.ALLOWED_ORIGINS || env.ALLOWED_ORIGIN || '').split(',')
    .map(s => s.trim())
    .filter(Boolean);
  if (list.length === 0) {
    // no restriction configured; allow all (not recommended for production)
    return '*';
  }
  if (list.includes(origin)) {
    return origin;
  }
  return '';
}

function toBase64(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  let binary = '';
  const chunkSize = 0x8000; // 32KB chunks to avoid call stack limits
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk);
  }
  return btoa(binary);
}


