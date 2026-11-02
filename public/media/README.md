# Media library

- `stock/`: Licensed real photography for visual context, with authors, source pages, dates, and license links in [CREDITS.md](stock/CREDITS.md). Never use it as original portfolio work.
- `stills/`: Add Zoriah's original photographs, poster frames, and film stills here.
- `films/`: Add original web-ready films and WebVTT caption tracks here.
- `placeholders/`: Original abstract assets retained from the earlier design. They are no longer displayed.
- `social-card.png`: Typographic identity artwork for link previews; no stock photo or film-credit claim.

Paths in the content configuration are relative to `public/`, without a leading slash. Example: `media/stills/your-film.webp`. The base-aware helper works under both the GitHub Pages repository path and the future custom domain.

Export large original stills as WebP or AVIF, about 1600–2400px wide, with smaller mobile variants. Use truthful alt text and accurate captions. Film components use native controls and preload="none". Add captions for spoken content and provide a transcript when needed. Keep long masters outside the repository; use a permitted Vimeo/YouTube embed or a web-sized original file.

All visible stock photography is locally hosted, with an explicit stock caption beside each image. No AI-generated imagery or borrowed footage is used. The original-film portfolio starts empty until actual films are supplied.
