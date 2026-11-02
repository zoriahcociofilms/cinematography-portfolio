# Media library

- `placeholders/`: Original code-drawn SVG abstract light studies used only for initial design. They are not wildlife images or original film frames. Keep their visible temporary labels until replaced.
- `stills/`: Add your original photographs, poster frames, portrait, and gallery exports here.
- `films/`: Add your original web-ready films, a short silent hero loop, and WebVTT caption tracks here.
- `social-card.png`: Typographic 1200×630 identity artwork for link previews.

All configuration paths are relative to `public/`, without a leading slash: `media/stills/your-image.webp`. The base-aware media helper supports both GitHub Pages’ repository path and the future root domain.

For stills, start with WebP or AVIF exports around 1600–2400px wide for large frames and smaller gallery derivatives where appropriate. Aim for a few hundred KB per image. Preserve the framing in the poster; cards use object-fit cover. Add truthful, descriptive alt text, and remove `temporary` labels only when the replacement is your original work.

For a hero, use a short 1080p silent loop (WebM or MP4), preferably below 5MB, plus a lightweight matching poster. No background video is downloaded for reduced-motion or data-saving visitors. The visible pause control remains available while a video is enabled. Never put essential spoken information in a silent background loop.

Full films use preload="none" and native controls. Provide captions and a transcript when the content calls for them. GitHub blocks ordinary Git files over 100MiB and repository/Pages limits apply; keep long masters outside this repository. An existing free Vimeo/YouTube upload is an optional embedding route, subject to that provider’s terms and quotas. No paid hosting is required by this project.

Only upload media you own or are authorized to use. Add real production details and credits explicitly; the starter deliberately contains none.
