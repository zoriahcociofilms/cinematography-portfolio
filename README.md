# Zoriah Cocio — Cinematography Portfolio

An independent filmmaker’s editorial home: dark olive, warm ivory, considered typography, original abstract light studies, and space for the moving image.

**Account:** `zoriahcociofilms`  
**Repository:** `cinematography-portfolio`  
**Initial URL:** https://zoriahcociofilms.github.io/cinematography-portfolio/  
**Future primary domain:** `zoriahcociofilms.com` (prepared, not activated)

## Start locally

Use Node.js 24 LTS and npm. No paid service, API key, subscription, or backend is needed.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite, including `/cinematography-portfolio/`.

```sh
npm run test:config
npm run build
npm run preview
```

## Your content desk

Edit **`src/content/site.ts`** to update your biography, camera equipment, partnership copy, contact email, social URLs, homepage video, and project list. All seven pages share this configuration. Empty email/social values deliberately display “coming soon”; no invented address or dead social link is published. Adding a real email enables mail links, copy-email, and a topic-specific inquiry link. The inquiry opens the visitor’s email app; this is not a form submission service.

Primary homepage wording and short editorial headings are in `src/pages.tsx`. SEO titles and descriptions live in `scripts/site-settings.mjs`. Static HTML metadata, canonical URLs, sitemap, and robots.txt are generated before every dev session and production build; do not edit generated HTML.

### Replace temporary artwork

The initial site contains **no stock photography, AI wildlife imagery, or borrowed film footage**. Its SVG light studies are original code-drawn abstract design assets, not Zoriah’s filmmaking work. Every visible use is labeled. The About portrait is also a clearly labeled placeholder. The FX6 feature is typography, not a borrowed product photograph.

1. Put your original photos and poster frames in `public/media/stills/`.
2. Put short web-ready video files and caption tracks in `public/media/films/`.
3. Set the corresponding paths in `src/content/site.ts`, relative to `public/`, **without a leading slash**. Example: `media/stills/river-poster.webp`.
4. Replace descriptive alt text and captions. Set `temporary: false` only for your actual original assets.
5. Replace the portrait study in `src/pages.tsx` with your portrait, remove its temporary label and initials, and add accurate alt text.

`public/media/README.md` has export and performance guidance. Abstract gallery examples remain labeled temporary artwork. They demonstrate the gallery without inventing field imagery.

### Add an original film

Replace an entry in `projects` (or append another). Keep a unique `id`, which forms the shareable URL `work/?project=your-id`. Set `status: 'published'` only for a real project and include only accurate production information. For a self-hosted film:

```ts
{
  id: 'your-film',
  title: 'Your real film title',
  category: 'Wildlife', // or 'Documentary' / 'Commercial'
  status: 'published',
  year: '2026',
  summary: 'A short, accurate introduction.',
  description: 'The context and story of your film.',
  role: 'Cinematographer', // only your actual role
  cover: {
    src: 'media/stills/your-film.webp',
    alt: 'Describe the original frame.',
    caption: 'An accurate frame caption.',
    temporary: false,
  },
  film: {
    kind: 'file',
    src: 'media/films/your-film.mp4',
    poster: 'media/stills/your-film.webp',
    captions: 'media/films/your-film.en.vtt',
  },
  technical: [{ label: 'Camera', value: 'Sony FX6' }],
  behindTheScenes: 'An accurate account of the production.',
  gallery: [{
    src: 'media/stills/your-frame.webp',
    alt: 'Describe what is visible.',
    caption: 'An accurate frame caption.',
  }],
}
```

For embeds use `film: { kind: 'vimeo', id: 'YOUR_NUMERIC_VIDEO_ID', title: 'Your film title' }` or `{ kind: 'youtube', id: 'YOUR_VIDEO_ID', title: 'Your film title' }`. Videos load only after the visitor clicks “Load film,” with a disclosure about the provider. Vimeo uses `dnt=1`; YouTube uses its privacy-enhanced domain. Account privacy settings must allow embedding. No external film is currently configured.

The responsive gallery supports enlargement, next/previous buttons, arrow keys, Escape, focus return, and native dialog focus containment. Add caption tracks for spoken audio and provide an accessible transcript where needed.

### Homepage background video

Set `heroMedia.video` and its MIME type. Replace `heroMedia.poster` with a matching original still. Set `temporary: false` when original material replaces the temporary art. The background is muted, loops, plays inline, and has a pause/play control. Reduced-motion and data-saving users receive the poster without a video download. Failed video playback retains the still.

## Pages and architecture

Seven real static entry points (`/`, `/work/`, `/about/`, `/wildlife/`, `/equipment/`, `/partnerships/`, `/contact/`) render the shared React application. Direct links and refreshes work on GitHub Pages; there is no hash-router workaround. Each page has its own title, description, canonical URL, and Open Graph tags. A custom 404 page displays the same design system with a recovery link. Project query links intentionally use the work page’s canonical URL.

```text
src/content/site.ts       Personal copy, projects, contact, equipment, media
src/components/           Shared layout, media, project and editorial components
src/pages.tsx             Page compositions and short headings
src/styles.css            Editorial design and responsive breakpoints
scripts/site-settings.mjs Hosting policy and page metadata
scripts/prepare-pages.mjs Static HTML, sitemap, robots and optional CNAME
public/media/             Original uploads and labeled temporary assets
tests/                    Responsive/accessibility and deployment tests
.github/workflows/        Build, browser checks, and GitHub Pages publication
```

React, TypeScript, Vite, Tailwind CSS, Motion, Lucide. Fonts are bundled locally: Cormorant Garamond and Manrope, with SIL Open Font License notices in `public/fonts/`. No font CDN, analytics, trackers, or remote media requests are needed for the initial site. The generated 1200×630 social card is a typographic identity asset and makes no film-credit claim.

## Deploy only to the filmmaking account

Do not run repository commands until the account check returns **`zoriahcociofilms`**. The browser, GitHub connector, and GitHub CLI have independent login states. A browser login does not authenticate the CLI. Never use a token or remote belonging to the separate engineering account.

If necessary, sign in:

```sh
gh auth login --hostname github.com --git-protocol https --web
gh api user --jq .login
```

For this build the filmmaking CLI login was isolated from other accounts with `GH_CONFIG_DIR="$PWD/.local/gh"`. If the default CLI is signed out, prefix the commands below with that variable, or run `export GH_CONFIG_DIR="$PWD/.local/gh"` in this checkout. The ignored `.local/` directory must never be committed or shared.

The helper `scripts/publish-github.sh` verifies the authenticated account before initialization, creation, or pushing. It configures only this checkout’s commit identity and uses a process-scoped credential helper rather than changing global Git credentials. It creates a **public** repository, pushes `main`, and enables GitHub Pages with GitHub Actions. It stops on account mismatch or any existing conflicting Git remote.

```sh
bash scripts/publish-github.sh
```

If the repository already exists, the helper stops; review it manually instead of overwriting it. If GitHub refuses the Pages API setting, open the new repository’s **Settings → Pages → Build and deployment → Source → GitHub Actions**, then rerun the workflow. GitHub may require granting workflow write permission to the CLI’s OAuth session for the workflow file push.

The workflow runs configuration checks, the production build, and Playwright/axe tests at 390px, 768px, and 1440px, then deploys the verified `dist/` artifact. Deployment only runs in `zoriahcociofilms/cinematography-portfolio`. The first run can need the Pages source enabled before its deployment job succeeds.

Verify publication rather than assuming a successful push means a live site:

```sh
gh run list --repo zoriahcociofilms/cinematography-portfolio --limit 3
gh run view RUN_ID --repo zoriahcociofilms/cinematography-portfolio
curl -I https://zoriahcociofilms.github.io/cinematography-portfolio/
```

Open the live URL and at least one inner page. If access or permissions are missing, the complete source and production build can remain local until the filmmaking account is available.

## Future custom domain — do not activate yet

No domain has been purchased or configured, no DNS has been changed, and no CNAME is generated by the default build. **Wait until ownership of `zoriahcociofilms.com` is confirmed and activation is requested.**

Once confirmed:

1. Follow [GitHub’s current custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), including domain verification. Read the current DNS targets there rather than relying on old hardcoded IP addresses.
2. Set the repository Actions variable `CUSTOM_DOMAIN` to exactly `zoriahcociofilms.com`. The next build switches the Vite base to `/`, updates every canonical/OG/sitemap URL, and emits `CNAME` for the apex domain.
3. Configure the apex domain and `www` using GitHub’s current instructions. Set the repository Pages custom domain to **`zoriahcociofilms.com`**, the primary apex; GitHub supports redirecting its configured `www` counterpart to the primary domain.
4. After DNS propagates and GitHub issues its certificate, enable **Enforce HTTPS** and verify both HTTPS domains, inner pages, images, and films. Keep `zoriahcocio.com` and its DNS entirely separate.

To test the root-path artifact locally without changing DNS or any GitHub setting:

```sh
CUSTOM_DOMAIN=zoriahcociofilms.com npm run build
CUSTOM_DOMAIN=zoriahcociofilms.com npm run preview
```

Run `npm run build` again without that variable to restore the repository-hosted artifact. The shared `asset()` and `href()` helpers always use Vite’s base, so links and uploads work under both hosts. Do not hardcode `/media/` or `/work/` paths in components.

## Verification

```sh
npm run test:config
npm run build
npx playwright install chromium
npm test
```

The browser suite exercises direct page loads, horizontal overflow, page metadata, WCAG A/AA checks, mobile menu keyboard behavior, project filtering/detail links, partnership accordions, contact placeholders, gallery navigation, and reduced-motion behavior. CI installs the browser and OS dependencies automatically. For a strict production test, stop any dev server already using port 4319 before running the suite so its preview server uses `dist/`.

Lab checks are not field Core Web Vitals. There are no field metrics until real visitors use the deployed site. Original media size, third-party embeds, hosting, and visitors’ devices will affect real performance.

## Product references

Equipment copy is grounded in [Sony’s FX6 specifications](https://electronics.sony.com/imaging/cinema-line-cameras/all-cinema-line-cameras/p/ilmefx6v) and [Sony’s FE 400–800mm announcement](https://sony.mediaroom.com/2025-02-26-Sony-Electronics-Unveils-Specialty-400-800mm-F6-3-8-G-OSS-Super-Telephoto-Zoom-G-Lens-The-Furthest-Reaching-Sony-Lens-To-Date). The FX6 is owned; the lens is being sought through a professional partnership and is **not** listed as owned. No Sony affiliation, sponsorship, client, award, or completed production is implied.
