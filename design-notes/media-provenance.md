# Homepage media provenance

## Liber-0 highlights

The homepage uses `images/my_papers/liber0-highlights.gif`, an animated image: 480 × 270, 357 frames at approximately 12 fps, 29.75 seconds, infinite loop, about 8.1 MB. It starts as an ordinary image without a player, controls, sound, or a click. A static poster is used when the visitor requests reduced motion. The 960 × 540 H.264 edit is retained in `videos/liber0-highlights.mp4` as an editable source master; it is not embedded as a player.

All clips come from LiberAI's official [Liber-0 release](https://www.liberai.com/blog/liber0/). They are excerpts, in the order below, with straight cuts and task labels. No additional speed-up, simulated footage, or generated robot footage was introduced. Original embedded playback-speed labels remain visible. The boba workflow is application-specific adaptation; it is not described as a zero-shot example.

- [Milk tea preparation](https://www.liberai.com/blog/liber0/assets/optimized-videos/milk-tea-final-20261104.1419219ca6a1.mp4): 126.00–134.00 seconds of the official source.
- [Cup placement](https://www.liberai.com/blog/liber0/assets/optimized-videos/cup-placement.dfeba6c4ccd9.mp4): 0.00–7.16 seconds of the official source.
- [Packing and storage](https://www.liberai.com/blog/liber0/assets/optimized-videos/packing-and-storage.ccede31a7dff.mp4): 8.50–23.10 seconds of the official source.

## BiDexAffordance illustration

- Scientific source: the existing `data/BiDexAffordance.pdf`, abstract and Sections III–IV, particularly the Figure 2 caption and contact initialization/refinement description. The PDF remains unlinked from the public homepage.
- Conceptual illustration, not an experimental photograph or measured heatmap. The accompanying figure caption identifies it as an illustrated method overview.
- Shows a selected first contact, a conditional complementary contact for the other hand, then joint physical refinement of wrist and finger configurations. It does not depict independent contact predictions or sequential physical execution.
- Created with the built-in image generation tool. Exact prompt: `design-notes/bidex-illustration-prompt.txt`.
- Full image: `images/my_papers/bidex-method-illustration.png` (1448 × 1086). Web preview: `images/my_papers/bidex-method-preview.webp` (840 × 630).
- Original BiDexAffordance images are preserved. LEAP and MO-DDN artwork is unchanged.
