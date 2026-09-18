# Finwise — Marketing Site

A full React + TypeScript + Tailwind CSS v4 rebuild of the Finwise marketing site,
covering all pages from the design set, with shared layout, scroll animations
(AOS), and a standard, scalable project structure.

## Stack

- **Vite** — build tool / dev server
- **React 19 + TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`, theme tokens live in `src/index.css`)
- **React Router v7** — client-side routing
- **AOS** (Animate On Scroll) — scroll-reveal animations, initialized once in `App.tsx`
- **lucide-react** — icon set
- **Dicebear** (via URL, no extra dependency) — generated avatar illustrations used as
  safe stand-ins for photography (see "About images" below)

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/
    layout/        Navbar, Footer, Layout (route shell), PageHero (shared inner-page hero)
    ui/             Reusable primitives: Button, Atoms (SectionHeading, Breadcrumb,
                    StatItem, NumberedRow, IconTile, Card), OrbitVisual, PhoneMock,
                    PersonAvatar, BlogCover, ComplianceBadges, SocialIcon, Logo
  data/             Static content: navigation.ts, footer.ts, testimonials.ts, blog.ts
  lib/              useAOS.ts — AOS init/refresh hooks
  pages/            One file per route (see routing table below)
  App.tsx           Route definitions
  main.tsx          App entry point
  index.css         Tailwind import + design tokens (colors, fonts)
```

## Routes

| Path                          | Page                          |
|--------------------------------|--------------------------------|
| `/`                             | Home                            |
| `/bfi`                          | BFI Engine                      |
| `/savings-goal`                 | Savings & Goal                  |
| `/family-child-account`         | Family & Child Account          |
| `/allowance-tasks`              | Allowance & Task System         |
| `/solution/individuals`         | Solution — Individuals          |
| `/solution/families`            | Solution — Parent & Families    |
| `/security-trust`               | Security & Trust                |
| `/pricing`                      | Pricing                         |
| `/about`                        | About                           |
| `/press`                        | Press & Newsroom                |
| `/customer-stories`             | Customer Stories                |
| `/partners`                     | Partners                        |
| `/contact`                      | Contact                         |
| `/legal`                        | Legal (Terms / Privacy / Cookies / Regulatory) |
| `/bank-linking`                 | Bank Linking & Secure Data      |
| `/resources`                    | Resources (blog list)           |
| `/resources/:slug`              | Resource detail (blog article)  |
| `*`                              | 404                              |

## Design tokens

All theme tokens live in `src/index.css` under `@theme`, so Tailwind utility
classes like `bg-ink-900`, `text-gold-500`, `text-teal-400`, `text-mist-400`, and
`font-display` are available anywhere in the app without extra config.

- **ink** — background/surface scale (950 darkest → 500 lightest)
- **gold** — primary accent (CTAs, highlights)
- **teal** — secondary accent (icons, guidance)
- **mist** — text scale (100 brightest → 500 dimmest)
- **font-display** — Manrope (headings), **font-body** — Inter (body text)

## AOS (scroll animations)

`useAOSInit()` is called once in `App.tsx` and initializes AOS globally.
Any element with a `data-aos="fade-up"` (or `fade-left`, `fade-right`, etc.)
attribute animates into view on scroll. `data-aos-delay` staggers groups of
elements. If you add content that mounts after a route change and doesn't
animate, call `useAOSRefresh()` inside that page component.

## About images

The original design screenshots mix photography with abstract 3D-icon
renders. Since real stock photography wasn't available to source safely in
this environment, all "photo" placements were replaced with two consistent,
license-safe alternatives that match the app's existing abstract/tech visual
language:

1. **`OrbitVisual`** — a decorative icon + dashed-orbit composition used in
   place of hero photography (About, Family, Security, Press, Partners, etc.)
2. **`PersonAvatar`** — Dicebear-generated illustrated avatars (via URL, no
   npm dependency) used for testimonials and team members instead of stock
   photos of real-looking strangers.

To swap in real photography later:
- Drop image files into a new `src/assets/` folder
- Replace the relevant `<OrbitVisual ... />` or `<PersonAvatar ... />` usage
  with a plain `<img src={...} />`, or extend those components to accept an
  optional `src` prop that renders a photo instead of the generated graphic.

## Content

Marketing copy is sourced from the provided Finwise designs and lightly
adapted; blog post bodies on `/resources/:slug` currently all render the same
long-form article as a template — swap in a CMS or MDX source for real
per-article content when ready.
