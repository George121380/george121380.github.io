/* The complete portfolio remains readable without JavaScript. */
/* Inline posters paint with the HTML. Reveal a loop only after it starts playing. */
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionPreviews = Array.from(document.querySelectorAll('.project-motion'), frame => ({
  frame,
  video: frame.querySelector('video'),
  nearby: false,
  failed: false,
}));

function updatePreview(preview) {
  const { frame, video } = preview;
  if (motionPreference.matches || document.hidden || !preview.nearby || preview.failed) {
    video.pause();
    if (motionPreference.matches || preview.failed) frame.classList.remove('is-playing');
    return;
  }
  video.muted = true;
  if (!video.hasAttribute('src')) {
    video.preload = 'auto';
    video.src = video.dataset.src;
  }
  if (video.paused) {
    const playback = video.play();
    if (playback) playback.catch(() => {
      // Autoplay restrictions or interrupted loads must leave the poster visible.
      if (video.paused) frame.classList.remove('is-playing');
    });
  }
}

motionPreviews.forEach(preview => {
  preview.video.addEventListener('playing', () => {
    if (motionPreference.matches || document.hidden || !preview.nearby || preview.failed) {
      updatePreview(preview);
      return;
    }
    preview.frame.classList.add('is-playing');
  });
  preview.video.addEventListener('error', () => {
    preview.failed = true;
    updatePreview(preview);
  });
});

const updatePreviews = () => motionPreviews.forEach(updatePreview);
motionPreference.addEventListener('change', updatePreviews);
document.addEventListener('visibilitychange', updatePreviews);

if ('IntersectionObserver' in window) {
  const previewByFrame = new Map(motionPreviews.map(preview => [preview.frame, preview]));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const preview = previewByFrame.get(entry.target);
      preview.nearby = entry.isIntersecting;
      updatePreview(preview);
    });
  }, { rootMargin: '300px 0px' });
  motionPreviews.forEach(preview => observer.observe(preview.frame));
} else {
  motionPreviews.forEach(preview => { preview.nearby = true; });
  updatePreviews();
}

const dialog = document.querySelector('#figure-dialog');
if (dialog && typeof dialog.showModal === 'function') {
  const figure = document.querySelector('#figure-image');
  const caption = document.querySelector('#figure-caption');
  document.querySelectorAll('[data-figure]').forEach(button => {
    button.addEventListener('click', () => {
      figure.src = button.dataset.figure;
      figure.alt = button.querySelector('img').alt;
      caption.textContent = button.dataset.caption;
      dialog.showModal();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
}
