# califeri.dev

Source for [www.califeri.dev](https://www.califeri.dev), Chryssa Aliferi's personal site: home page with selected projects and writing, and a CV page.

Built with Next.js (App Router), React, Tailwind CSS v4, and the RudderStack JavaScript SDK. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Update content

Content lives in `src/content/`, separate from the page markup:

| File | What it holds |
| --- | --- |
| `projects.ts` | "Selected work" cards on the home page |
| `blog.ts` | "Thoughts" cards on the home page, newest first |
| `experience.ts` | CV roles. Use `"YYYY-MM"` dates and `end: null` for the current role; period and duration labels are calculated from them |
| `site.ts` | Header navigation and social links (used by the header and footer) |

## Project structure

```
src/
  app/          routes: / (page.tsx) and /cv
  components/   SiteHeader, SiteFooter, cards, TrackedLink, icons
  content/      site data (see above)
  lib/          RudderStack wrapper, date helpers
```

## Analytics

Analytics use the RudderStack JS SDK.

Set these in `.env.local` (and in the Vercel project settings):

```
NEXT_PUBLIC_RUDDERSTACK_WRITE_KEY=...
NEXT_PUBLIC_RUDDERSTACK_DATA_PLANE_URL=...
```

Without them the SDK isn't loaded and tracking calls do nothing.

- Page views: `AnalyticsProvider` sends a `page` call on every route change ("Home", "CV").
- Clicks: use `TrackedLink` with an `eventName` and `eventProperties` instead of calling `trackEvent` inline.
