# Homepage media provenance

## Active Liber-0 loop: official release video

The current homepage uses `images/my_papers/liber0-official-loop.gif`: 640 × 360, 195 frames, 15 fps, 13 seconds, infinite loop, about 11.3 MB. It is an ordinary image that loops automatically without player controls or a click. The poster for reduced-motion visitors is `images/my_papers/liber0-official-poster.webp`.

Source: the official 4K release MP4 supplied by the user on their Desktop (3840 × 2160, 172.82 seconds). Four excerpts show adding ingredients (129.3–131.7s), dispensing tea (135.2–138.7s), closing the cup (155.0–160.2s), and serving (161.0–163.0s). Original camera edits and 3× playback-speed labels are retained; no additional speed-up or graphic overlay was added. This application-specific drink workflow is not labeled zero-shot. The 960 × 540 editing master is `videos/liber0-official-cut.mp4`; it is not embedded as a player. Exact edit metadata is in `design-notes/liber0-official-edit.json`.

## Earlier Liber-0 loop (retained for rollback)

The earlier version uses `images/my_papers/liber0-highlights.gif`, an animated image: 480 × 270, 357 frames at approximately 12 fps, 29.75 seconds, infinite loop, about 8.1 MB. It starts as an ordinary image without a player, controls, sound, or a click. A static poster is used when the visitor requests reduced motion. The 960 × 540 H.264 edit is retained in `videos/liber0-highlights.mp4` as an editable source master; it is not embedded as a player.

All clips come from LiberAI's official [Liber-0 release](https://www.liberai.com/blog/liber0/). They are excerpts, in the order below, with straight cuts and task labels. No additional speed-up, simulated footage, or generated robot footage was introduced. Original embedded playback-speed labels remain visible. The boba workflow is application-specific adaptation; it is not described as a zero-shot example.

- [Milk tea preparation](https://www.liberai.com/blog/liber0/assets/optimized-videos/milk-tea-final-20261104.1419219ca6a1.mp4): 126.00–134.00 seconds of the official source.
- [Cup placement](https://www.liberai.com/blog/liber0/assets/optimized-videos/cup-placement.dfeba6c4ccd9.mp4): 0.00–7.16 seconds of the official source.
- [Packing and storage](https://www.liberai.com/blog/liber0/assets/optimized-videos/packing-and-storage.ccede31a7dff.mp4): 8.50–23.10 seconds of the official source.

## Active BiDexAffordance loop: method, simulation, and real-robot montage

The homepage uses `images/my_papers/bidex-research-reel.gif`: 640 × 360, 262 frames, 20 fps, 13.1 seconds, infinite loop. Both homepage project animations now share a 16:9 aspect ratio. The reduced-motion poster is `images/my_papers/bidex-research-poster.webp`, taken from the grasp-refinement scene. There are no captions, playback controls, added metrics, or generated illustrations.

The source is the full 306.9-second submission video in the user-supplied research directory, `2026-ECCV-BiDexAffordance/supp/BiDexAffordance_ICRA2027.mp4`, supplemented by the project's original `videos_ours/100015_pose{0,3,5,6}.mp4` optimization recordings. The edit contains:

- **Contact priors (3.0 s):** The original pot, bottle, and boot heatmaps from 74–77 s, cropped and arranged in three columns. Each object's first-contact prediction is above its conditional second-contact prediction. The heatmap colors and geometry are unchanged. The original background object images and color bar are outside the crop; no numerical interpretation of the scores is added.
- **Grasp refinement (2.8 s):** Four original optimization clips, each from 0.4–3.2 s, shown simultaneously in a 2 × 2 arrangement. Both hands and their object are retained. Their playback speed is unchanged.
- **Real robots (7.3 s):** 276.3–283.6 s of the submission video. The original six-panel montage is retained in full, showing six experiments together without an individual camera zoom. The clip ends before the conclusion-slide transition.

The 960 × 540 master is `videos/bidex-research-reel.mp4`. Exact source files, crop coordinates, and timings are recorded in `design-notes/bidex-research-edit.json`. Source videos and the original paper images remain unchanged. These are selected qualitative demonstrations, not aggregate performance evidence. The previous close-up edit is retained below for rollback.

## Previous BiDexAffordance loop: individual real-robot close-ups

The preceding version uses `images/my_papers/bidex-real-robot-loop.gif`: 480 × 360, 240 frames, 12 fps, 20 seconds, infinite loop, about 11.4 MB. Its reduced-motion poster is `images/my_papers/bidex-real-robot-poster.webp`. It replaced the generated illustration and the subsequent line drawing.

Source: `2026-ECCV-BiDexAffordance/supp/BiDexAffordance_ICRA2027.mp4` in the research directory explicitly supplied by the user. The 1920 × 1080, 60 fps, 306.9-second video contains a six-panel real-robot montage. The edit crops out three separate experiments, in order: cooking pot, basket, and pump bottle. Each excerpt uses 277.00–283.65 seconds, ending before the slide transition. The final edit is 20.0 seconds after frame-rate quantization.

Only spatial crops, resizing, straight cuts, GIF palette conversion, and removal of audio were applied. Original timing is preserved; no extra speed-up, labels, synthetic imagery, or generated frames were introduced. These selected demonstrations illustrate the method; they are not presented as aggregate performance evidence. The research source files remain unchanged. Exact source coordinates and times are in `design-notes/bidex-real-robot-edit.json`; the 640 × 480 H.264 editing master is `videos/bidex-real-robot-cut.mp4`.

### Earlier illustration (retained for rollback)

- Scientific source: the existing `data/BiDexAffordance.pdf`, abstract and Sections III–IV, particularly the Figure 2 caption and contact initialization/refinement description. The PDF remains unlinked from the public homepage.
- Conceptual illustration, not an experimental photograph or measured heatmap. The accompanying figure caption identifies it as an illustrated method overview.
- Shows a selected first contact, a conditional complementary contact for the other hand, then joint physical refinement of wrist and finger configurations. It does not depict independent contact predictions or sequential physical execution.
- Created with the built-in image generation tool. Exact prompt: `design-notes/bidex-illustration-prompt.txt`.
- Full image: `images/my_papers/bidex-method-illustration.png` (1448 × 1086). Web preview: `images/my_papers/bidex-method-preview.webp` (840 × 630).
- Original BiDexAffordance images are preserved. LEAP and MO-DDN artwork is unchanged.
