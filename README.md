# Peiqi Liu — personal homepage

Static source for https://peiqil.com/. Open `index.html` directly, or preview with:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

No dependency installation or build is required. The page is readable without JavaScript; `site.js` adds an accessible figure viewer with Escape-to-close.

## November 2026 revision

This review version is on `codex/homepage-refresh-20261103`, in a separate Git worktree. The original `master` checkout and live website are unchanged. The baseline is commit `a9bde85`.

Changes:

- A white academic layout with a readable introduction, consistent publication rows, restrained typography, and a responsive mobile layout.
- Liber-0 added as a team industry project. Peiqi's participation in its R&D as an intern is user-confirmed; no individual module ownership or authorship rank is claimed.
- Preserved the three existing academic works, complete author lists, workshop distinctions, oral presentation, dates, advisors, and contact links.
- Compressed local WebP previews, semantic HTML, keyboard-accessible figure zoom, and social metadata.
- Removed the old broken image-hover handlers. The earlier third-party visitor globe is omitted from this revision.

## Review and rollback

The adjacent `homepage-design-review-20261103` directory contains a before/after review page, the original HTML/CSS, and the first design draft. It is separate from website deployment files. To reopen it:

```sh
python3 -m http.server 8766 --bind 127.0.0.1 --directory ../homepage-design-review-20261103
```

Open http://127.0.0.1:8766/ for desktop, mobile-width, and before/after modes. The website also opens directly from this worktree's `index.html` without a running server.

To reject the draft, continue using the original `george121380.github.io` checkout. If the revision is later merged, revert its single redesign commit with `git revert <redesign-commit>`; do not reset or force-push shared history. No deployment or push is performed as part of preparing this draft.

## Content and design references

- Original homepage and research assets: https://peiqil.com/
- Original site's template lineage: https://jonbarron.info/
- Academic layout references: https://jonbarron.info/ and https://web.mit.edu/phillipi/
- Additional references reviewed: https://www.vincentsitzmann.com/ and https://jiayuanm.com/
- Liber-0 technical report: https://www.liberai.com/blog/liber0/
- Liber-0 preview image: resized from the official release's `/research/liber0/images/liber0-launch-cover-11s-poster.webp`.

The local original snapshot intentionally retains the original source. It is for comparison, not a second deployment target.
