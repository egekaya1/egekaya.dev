# egekaya.dev

Personal academic homepage of Ege Kaya, M.Sc. Computer Science student at UBC working on NLP interpretability, explainable AI, and systems engineering.

Live at [egekaya.dev](https://egekaya.dev).

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, `next-themes` for light/dark mode
- `lucide-react` icons (brand icons are inline SVGs in `components/icons.tsx`)
- Vercel Analytics and Speed Insights

## Editing content

All page content lives in [`lib/data.ts`](lib/data.ts): profile and links, research interests, news, research, experience, projects, education, honours, and skills. Add a news item or paper there; the sections render from it.

The CV is served from `public/resume.pdf`; replace that file to update it.

## Structure

```
app/
  layout.tsx            metadata, JSON-LD, theme provider
  page.tsx              sidebar + sections layout
  opengraph-image.tsx   generated social preview
components/
  profile.tsx           sticky sidebar (photo, affiliation, links)
  navbar.tsx, footer.tsx
  section.tsx           shared section wrapper and badge
  sections/             about, research, experience, projects, education, personal
lib/data.ts             site content
```

## Development

```bash
bun install
bun dev        # http://localhost:3000
bun run lint
bun run build
```

TypeScript is pinned to 6.0.x because `typescript-eslint` (used by `eslint-config-next`) does not yet support TypeScript 7.
