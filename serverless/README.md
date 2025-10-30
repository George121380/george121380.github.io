## Cloudflare Worker + Resend: Email Attachment Sender

This Worker receives a multipart/form-data upload and forwards the file as an email attachment using Resend.

### Files
- `worker.js`: Cloudflare Worker entry.

### What you need
1) A Resend account and a verified sender (domain or email).
2) A Cloudflare account (Workers).

### Environment variables (Cloudflare)
- Secret: `RESEND_API_KEY`
- Vars: `FROM_EMAIL`, `TO_EMAIL`, `ALLOWED_ORIGIN`, `MAX_FILE_BYTES` (optional, default `10485760`)

Example values:
- `FROM_EMAIL`: `no-reply@yourdomain.com` (must be verified in Resend)
- `TO_EMAIL`: `you@example.com`
- `ALLOWED_ORIGIN`: `https://george121380.github.io`
- `MAX_FILE_BYTES`: `10485760` (10MB)

### Deploy (Dashboard)
1. Create a new Worker in Cloudflare → paste `worker.js` into the editor.
2. Settings → Variables:
   - Add secret `RESEND_API_KEY` (from Resend Dashboard).
   - Add text variables: `FROM_EMAIL`, `TO_EMAIL`, `ALLOWED_ORIGIN`, optionally `MAX_FILE_BYTES`.
3. Save and deploy. Note the Worker URL (e.g., `https://your-subdomain.workers.dev`).
4. In your site `index.html`, set:
   ```js
   const UPLOAD_ENDPOINT = 'https://your-subdomain.workers.dev/api/send';
   ```

### Deploy (Wrangler CLI)
If you prefer CLI:
```bash
npm i -g wrangler
wrangler login
# Create a new Worker (choose "Hello World" template), then replace its code with worker.js
wrangler secret put RESEND_API_KEY
wrangler kv:namespace create # (not required for this worker)
# Add text vars
wrangler deploy --var FROM_EMAIL:no-reply@yourdomain.com \
                --var TO_EMAIL:you@example.com \
                --var ALLOWED_ORIGIN:https://george121380.github.io \
                --var MAX_FILE_BYTES:10485760
```

### CORS
- The Worker responds with `Access-Control-Allow-Origin: ALLOWED_ORIGIN`.
- The server also checks the `Origin` header and rejects non-matching origins.

### Limits and types
- Default max size is 10MB (settable via `MAX_FILE_BYTES`).
- Allowed types: PPT (`.ppt`) and PPTX (`.pptx`). MIME: `application/vnd.ms-powerpoint`, `application/vnd.openxmlformats-officedocument.presentationml.presentation`.

### Notes
- No files are persisted. Files are processed in memory and then discarded.
- For larger files, consider uploading to object storage (R2/S3) and emailing a short-lived download link instead of attaching the file.


