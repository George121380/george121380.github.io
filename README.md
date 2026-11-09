# Peiqi Liu — personal homepage

Static source for https://peiqil.com/. Open `index.html` directly, or preview with:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

No dependency installation or build is required. The page is readable without JavaScript, including static project previews; `site.js` adds automatic silent loops and an accessible figure viewer with Escape-to-close.

## November 2026 revision

This revision was prepared and reviewed on `codex/homepage-refresh-20261103`, in a separate Git worktree. The approved version is published through the repository's `master` branch and GitHub Pages at https://peiqil.com/. The original homepage is preserved at commit `a9bde85` and tag `homepage-before-refresh-20261103`.

Changes:

- A white academic layout with a readable introduction, consistent publication rows, restrained typography, and a responsive mobile layout.
- Liber-0 added as a team industry project. Peiqi's participation in its R&D as an intern is user-confirmed; no individual module ownership or authorship rank is claimed.
- Preserved the three existing academic works, complete author lists, workshop distinctions, oral presentation, dates, advisors, and contact links.
- Compressed local WebP previews, semantic HTML, keyboard-accessible figure zoom, and social metadata.
- Removed the old broken image-hover handlers. The earlier third-party visitor globe is omitted from this revision.

The subsequent refinement shortens the introduction, places the research focus and Liber-0 contribution near the top, improves publication typography, and uses an official robot demonstration image for Liber-0. It keeps contribution claims limited to the user's confirmed internship involvement.

The introduction opens with a brief USC master's-student note and advisor Prof. Erdem Bıyık, followed by LiberAI work. The experience entry uses “Graduate Researcher,” the standard wording for the user's requested research role. The user confirmed USC enrollment in August 2026 and completion of the Peking University undergraduate program in June 2026. The advisor's name and link were checked against https://ebiyik.github.io/. The cardinal-red USC seal comes from the university's Forbes profile image: https://i.forbesimg.com/media/lists/colleges/university-of-southern-california_416x416.jpg. Its design was checked against the current seal on https://www.usc.edu/usc-traditions/. The earlier black-and-white seal and letter mark are retained for rollback. The Liber-0 contribution uses the user's exact wording: “I contributed to model training and explored how to leverage glove-collected data.”

## Animation and reading refinement

The latest pass raises body copy to 16–17px, publication titles to 18px, authors to 14–14.5px, and publication metadata to 14–15px. It widens the desktop column modestly, keeps mobile text readable, and makes the research introduction more direct.

Liber-0 uses a 13-second continuously looping edit from the user-provided official 4K release video. BiDexAffordance uses a 13.1-second research reel: paired contact heatmaps for three objects, four grasp-refinement visualizations, and the original six-panel real-robot montage. Both use 16:9 silent loops without player controls or a required click. Image captions have been removed; the other two paper illustrations are unchanged. Sources, edit ranges, and rollback assets are recorded in `design-notes/media-provenance.md`.

### Fast initial display

The active loops are now H.264 MP4s totaling 912,893 bytes, replacing 27,327,481 bytes of GIFs (96.7% smaller). Their first-frame WebP images total 10,176 bytes before base64 encoding and are embedded in the HTML, so a preview appears with the page without waiting for another image request. The video overlays its poster only after playback starts; blocked autoplay, missing JavaScript, or a media error leaves the poster visible.

The MP4 metadata is placed at the start of each file for progressive playback. Videos load and play within 300px of the viewport and pause outside that area or while the tab is hidden. Reduced-motion visitors see static previews and do not start video downloads. Both clips retain the approved edit and aspect ratio. CSS and JavaScript URLs are versioned together to avoid mixing cached styles with the new markup.

## RoboDojo result (November 9, 2026)

The LiberAI experience entry now includes one sentence stating that Peiqi trained Liber-0 Preview, which ranked #1 on the RoboDojo simulation leaderboard on September 17, 2026. The training responsibility was explicitly confirmed by Peiqi. The result uses the existing secondary body-text styling and links to the official simulation leaderboard: https://robodojo-benchmark.com/leaderboard?bench=sim.

The supplied screenshots `Downloads/IMG_7725.JPG` (rank #1, average score 30.74 / success rate 25.52%) and `Downloads/IMG_7724.JPG` (dated September 17, 2026, UTC+8) support the historical result. RoboDojo's official update log also records the addition of Liber-0 Preview and Liber-0 Lite on that date with matching scores. This is a dated simulation result, not a claim about the current ranking or the real-world leaderboard. The screenshots are reference material, not added to the page layout.

The previous published revision is `32d4197`; this change can be reverted normally without resetting shared history.

## Review and rollback

The adjacent `homepage-design-review-20261103` directory contains a review page, the original HTML/CSS, the first design draft, and `academic-v2` through `academic-v5` snapshots of preceding academic designs. It is separate from website deployment files. To reopen it:

```sh
python3 -m http.server 8766 --bind 127.0.0.1 --directory ../homepage-design-review-20261103
```

Open http://127.0.0.1:8766/ for desktop, mobile-width, and comparison with the previous academic design. The website also opens directly from this worktree's `index.html` without a running server.

The published version immediately before the loading optimization is preserved at commit `e9ddc2e` and tag `homepage-before-media-optimization-20261103`. The preceding media revision is preserved at commit `4c4759c` and in the `academic-v5` comparison snapshot. The BiDex research-reel refinement is commit `74f643d`. Earlier academic design commits are `4c4759c`, `c7548e3`, `40cf6a7`, and `0c869fb`. To restore the entire pre-refresh homepage, restore the tree from `homepage-before-refresh-20261103` in a new commit and publish that commit through `master`. Individual changes can also be reverted normally. Do not reset or force-push shared history.

## Content and design references

- Original homepage and research assets: https://peiqil.com/
- Original site's template lineage: https://jonbarron.info/
- Academic layout references: https://jonbarron.info/ and https://web.mit.edu/phillipi/
- Additional references reviewed: https://www.vincentsitzmann.com/ and https://jiayuanm.com/
- Liber-0 technical report: https://www.liberai.com/blog/liber0/
- Earlier Liber-0 robot image: resized from https://www.liberai.com/research/liber0/images/milk-tea-final-poster.webp. The drink-making workflow is not labeled zero-shot.
- Earlier Liber-0 preview retained for comparison: resized from the official release's `/research/liber0/images/liber0-launch-cover-11s-poster.webp`.

The local original snapshot intentionally retains the original source. It is for comparison, not a second deployment target.
