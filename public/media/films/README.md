# Original wildlife footage

These five files were supplied by Zoriah Cocio and identified by the owner as personally filmed original footage. None existed in the repository before this update. Their contents were reviewed at five points across each clip before the titles and descriptions were written. No stock video was substituted.

| Supplied file / local upload path | Selected Work title | Measured export dimensions | Duration | Approx. size |
| --- | --- | --- | --- | --- |
| `public/media/films/43106-434353116.mp4` | A Quiet Regard | 1920 × 1080 | 32.53 s | 15.1 MiB |
| `public/media/films/94393-643067770.mp4` | The Clearing | 910 × 512 | 32.33 s | 18.8 MiB |
| `public/media/films/158832-817668596.mp4` | A Passing Gesture | 3840 × 2160 | 20.10 s | 62.9 MiB |
| `public/media/films/180819-865216782.mp4` | The Forest Below | 910 × 512 | 14.40 s | 8.3 MiB |
| `public/media/films/328168.mp4` | Grass Through Snow | 3840 × 2160 | 12.97 s | 76.7 MiB |

These are dimensions of the delivered files, not claims about camera acquisition. No camera metadata, filming locations, production dates, clients, or film credits were supplied or invented. The owner’s professional camera experience in About does not identify the camera used for any of these clips.

All five exports contain H.264 video in MP4 with 4:2:0 pixel format. Four have their original AAC audio; The Forest Below has no audio stream. The original frame rates, video/audio content, resolution, and aspect ratios are preserved. No grade, music, sound effects, watermark, overlay, or upscale was added.

For A Quiet Regard and A Passing Gesture, the MP4 index was moved to the start for metadata-first loading with `ffmpeg -i INPUT -map 0 -c copy -movflags +faststart OUTPUT`. This is a container-only remux: SHA-256 hashes of the compressed audio/video streams matched before and after. The other three files were copied byte-for-byte. All five have their index before the media data.

Poster images were extracted from the actual videos without overlays at approximately 2 s, 8 s, 15 s, 3.6 s, and 3 s respectively. They are stored in `public/media/stills/` using the title slugs. Posters are at most 1600px wide and were never upscaled. They are previews; video files retain their supplied quality.

## Upload or replace footage

The supplied clips have already been imported; no additional upload is required for this version. To replace a clip, upload it to the exact repository path in the table and update its poster in `public/media/stills/`. Paths in `src/content/site.ts` omit `public/` and the leading slash, for example `media/films/43106-434353116.mp4`. The existing base-aware asset helper serves this as `/cinematography-portfolio/media/films/43106-434353116.mp4` on GitHub Pages and `/media/films/43106-434353116.mp4` on a future approved custom domain.

Update the file dimensions and accessible title in `film`, and the cover path, alt text, summary, and description in `projects` in `src/content/site.ts`. Remove unverified claims rather than inferring them from a filename or export timestamp. Do not replace a real clip with a placeholder video. Add WebVTT captions and a transcript if a future clip contains spoken material.

## Hosting assessment

The five clips total approximately 182 MiB and each is below GitHub’s 100 MiB per-file blocking limit. The two largest exceed its 50 MiB warning threshold. They were imported through Git, because browser uploads are limited to 25 MiB. The finished site remains below the 1 GB GitHub Pages publication limit. See [GitHub file limits](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github) and [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), checked November 3, 2026.

This small collection can use the existing free Pages deployment. Native controls, posters, `playsInline`, `preload="metadata"`, and no autoplay avoid fetching all five full clips on arrival, but the two high-bitrate exports can still buffer on slower mobile connections. The page never enlarges a video beyond its supplied pixel width.

For a larger collection or higher traffic, use a dedicated adaptive video host such as Vimeo or YouTube through the already-supported embed configuration, retaining the same project cards and descriptions. Review the provider’s current free limits first; no subscription, service, or paid API was activated. Embeds use the provider’s player, so retaining native HTML5 controls instead requires a direct MP4 URL from a suitable video/CDN host. Do not use Git LFS as a Pages video-serving workaround.
