# Zoriah Cocio Films

A minimal, photographic portfolio for wildlife, natural history, and documentary cinematography. Built in the existing React / TypeScript / Vite / Tailwind project, with the existing GitHub Pages Actions workflow and base-path policy.

**Signature line:** “I wait for the world to forget the camera.”  
**Live target:** https://zoriahcociofilms.github.io/cinematography-portfolio/  
**Repository:** https://github.com/zoriahcociofilms/cinematography-portfolio

## Run and build

Use Node.js 24 LTS and npm. No paid API, subscription, or backend is required.

```sh
npm ci
npm run dev
npm run test:config
npm run build
npm run preview
```

Open the URL printed by Vite, including `/cinematography-portfolio/`. The four pages are Home, Selected Work, About, and Contact. The former wildlife/equipment/partnerships URLs redirect to the relevant section of About or Contact. Production entry points have individual SEO titles, descriptions, canonical URLs, Open Graph metadata, and a sitemap. A custom 404 page preserves the site navigation.

## Edit content

`src/content/site.ts` is the content desk: biography, philosophy, owned camera, equipment partnership copy, email, social links, original projects, and credited stock photography. Keep `site.hero` exactly **I wait for the world to forget the camera.**

The contact email is `info@zoriahcocio.com`, with direct email, copy-email, and topic-specific inquiry links enabled. Update `site.email` to change it. Set the existing social URLs to show them; empty links are omitted. No nonfunctional contact form is displayed.

The About copy includes the bachelor's degree in Digital Cinematography, the owned Sony FX6, a patient observational philosophy, and conservation/environmental interests. Contact includes documentary collaborations and professional equipment partnerships. The Sony FE 400–800mm lens is clearly described as sought, not owned. No clients, credits, awards, affiliations, or completed films have been invented.

Edit the short page compositions in `src/pages.tsx`, design in `src/styles.css`, and SEO text in `scripts/site-settings.mjs`. Do not hand-edit generated HTML files. The redesign has no reveal animations, autoplay background video, or large marketing sections. The homepage includes a manually played public-domain wildlife video from the Grand Canyon, kept outside Selected Work.

## Photography and authenticity

The Home photography is **licensed Arizona imagery**. The About page uses the profile picture supplied by Zoriah, stored at `public/media/stills/zoriah-cocio.jpg` and configured by `site.portrait`. Photographer names and license links are kept in project records rather than displayed on the pages, as requested. Photo/video reference labels are also omitted at the owner’s request; the stock media remains separate from Selected Work and is not assigned original film credits. No AI imagery was generated, no watermark was removed, and no stock frame is represented as Zoriah's work.

See [the source and license inventory](public/media/stock/CREDITS.md). The current photographs were made in Tucson, Phoenix, and Saguaro National Park. Source pages and free licenses were verified November 2, 2026. Local WebP files and smaller responsive variants avoid runtime dependence on an external image CDN. Stock metadata is separate from `projects`; Selected Work contains only original published projects.

The original film portfolio is intentionally empty until actual footage and credits are provided. The earlier abstract assets remain in `public/media/placeholders/` for source continuity but are no longer displayed. The typographic social preview has no borrowed photo or film-credit claim. The visual reference informed layout restraint only; none of its images, text, credits, or business offerings were copied.

## Add an original film

Place original poster frames/stills in `public/media/stills/`, and web-ready video/caption files in `public/media/films/`. Use paths relative to `public/`, with no leading slash. Append an entry to `projects`:

```ts
{
  id: 'your-film',
  title: 'Your actual film title',
  category: 'Wildlife', // Natural history / Documentary / Conservation / Commercial
  status: 'published',
  year: '2026',
  summary: 'An accurate, short introduction.',
  description: 'The story and production context.',
  role: 'Cinematographer', // Your actual role only
  cover: {
    src: 'media/stills/your-film.webp',
    alt: 'A descriptive account of the original frame.',
    caption: 'An accurate caption.',
  },
  film: {
    kind: 'file',
    src: 'media/films/your-film.mp4',
    poster: 'media/stills/your-film.webp',
    captions: 'media/films/your-film.en.vtt',
  },
  technical: [{ label: 'Camera', value: 'Sony FX6' }],
  gallery: [],
  behindTheScenes: 'Optional, accurate production notes.',
}
```

Only `published` entries appear. A project is shareable at `work/?project=your-film`. Categories filter automatically when more than one is present. Do not use stock imagery as an original-project cover or gallery frame.

For an existing upload use `film: { kind: 'vimeo', id: 'VIDEO_ID', title: 'Your film title' }`, or `kind: 'youtube'`. Embeds load only after a visitor clicks Load film, with a provider disclosure. Native video uses controls, preload="none", and optional WebVTT captions. Provide transcripts and captions when needed. Reusable galleries support keyboard navigation, Escape, native dialog focus containment, and focus return. Keep long masters outside the repository and respect GitHub's file/Pages limits.

## Source organization

```text
src/content/site.ts       Personal copy, original films, stock credits
src/components/           Layout, original-project, video and gallery components
src/pages.tsx             Four concise page compositions
src/styles.css            Responsive editorial design
scripts/site-settings.mjs Existing hosting policy and page metadata
scripts/prepare-pages.mjs Static HTML, sitemap and robots generation
scripts/finalize-build.mjs 404 page and legacy-path redirects
public/media/stock/       Licensed contextual images and credit inventory
public/media/stills/      Your original stills and film posters
public/media/films/       Your original web-ready films and captions
.github/workflows/        Existing test/build/GitHub Pages pipeline
```

Fonts are bundled locally, with SIL Open Font License notices in `public/fonts/`. The site does not load analytics or tracking scripts. `site.referenceFilm` configures the local wildlife video and poster. The file uses native controls, is muted initially, and uses preload="none" so the full film is not fetched until requested. Existing Motion and Lucide dependencies are preserved; the redesigned pages use no animation runtime.

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
3. Set the repository Pages custom domain to **`zoriahcociofilms.com`**, the primary apex, before changing DNS. Then configure the apex domain and `www` using GitHub’s current instructions. The `www` CNAME points to `zoriahcociofilms.github.io`, without a repository path. GitHub redirects the configured `www` counterpart to the primary domain. For Actions deployments, GitHub uses the repository Pages setting; the build’s CNAME file is informational and does not activate the domain.
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

The existing Actions pipeline runs Playwright/axe at 390px, 768px, and 1440px before deployment. Checks cover all four pages, horizontal overflow, WCAG A/AA rules, exact signature wording, omitted reference labels and photographer names, the supplied About portrait, the working inquiry email and copy action, separation of stock and original work, mobile menu keyboard behavior, contact authenticity, reduced motion, and legacy URL redirects. CI retains browser reports and screenshots.

For a production test, stop a dev server on port 4319 first so the test runner previews `dist/`. Lab checks do not establish field Core Web Vitals; those need real visitors. Keep future original media exports appropriately sized.
