# Abdul Moiz — Portfolio

A premium, production-ready personal portfolio for **Abdul Moiz** — Software Engineer · AI/ML · Full-Stack Developer.

> Built to look and feel like the work of an elite Silicon Valley engineer: minimalist, futuristic, dark-first and motion-rich. Every section is engineered to land instantly with recruiters and hiring managers at top tech companies.

---

## ✨ Highlights

- **Apple-grade visual design** — minimal layouts, premium gradients, glassmorphism and subtle cyberpunk accents
- **Animated everywhere** — particle field, animated grid, aurora glows, scroll-driven timeline, role rotator, magnetic buttons, custom cursor
- **Recruiter-optimized storytelling** — Hero → About → Skills → Experience → Projects → Competitive Advantage → Resume → Contact
- **Real content** — every word, project and skill is sourced from the actual resume; no lorem ipsum, no template feel
- **Production-ready** — typed end-to-end, accessible (skip-to-content, focus rings, semantic HTML), reduced-motion friendly, SEO + Open Graph metadata
- **Zero backend required** — contact form opens the user's mail client with the message prefilled
- **Fully responsive** — desktop, tablet, mobile (animated mobile nav)

---

## 🧱 Tech Stack

| Layer            | Choice                                |
| ---------------- | ------------------------------------- |
| Framework        | **Next.js (App Router)** + React 19   |
| Language         | **TypeScript** (strict)               |
| Styling          | **Tailwind CSS** + `tailwindcss-animate` |
| Motion           | **Framer Motion**                     |
| Icons            | **Lucide React**                      |
| Component utils  | `clsx`, `tailwind-merge`, `cva`       |
| Build tool       | Turbopack (built-in)                  |

> The project pins to the latest patched Next.js release (auto-upgraded from 15 → 16 to address [CVE-2025-66478](https://nextjs.org/blog/CVE-2025-66478)). The App Router APIs used are forward-compatible.

---

## 📁 Project Structure

```
.
├── public/
│   ├── favicon.svg
│   └── Resume-Abdul-Moiz.pdf      ← downloadable CV
├── src/
│   ├── app/
│   │   ├── globals.css            ← design tokens, glass / grid / shimmer utilities
│   │   ├── layout.tsx             ← fonts, metadata, cursor, loader, scroll progress
│   │   └── page.tsx               ← composes all sections
│   ├── components/
│   │   ├── backgrounds/           ← animated grid, aurora, particle field, spotlight
│   │   ├── cursor/                ← custom cursor (auto-disabled on touch)
│   │   ├── loading/               ← initial loading screen
│   │   ├── navigation/            ← responsive navbar w/ animated mobile menu
│   │   ├── scroll/                ← scroll progress bar
│   │   └── ui/                    ← reusable primitives (Button, GlassCard, Magnetic, etc.)
│   ├── lib/
│   │   ├── data.ts                ← single source of truth — drives every section
│   │   └── utils.ts               ← cn() helper
│   └── sections/
│       ├── hero.tsx               ← role rotator, terminal accent, particles
│       ├── about.tsx              ← summary + animated stat counters
│       ├── skills.tsx             ← categorized skill cards
│       ├── experience.tsx         ← scroll-driven timeline
│       ├── projects.tsx           ← featured + filterable index
│       ├── advantage.tsx          ← "why me" — competitive advantage cards
│       ├── resume.tsx             ← preview card + download
│       ├── contact.tsx            ← animated contact form
│       └── footer.tsx             ← minimal premium footer
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18.18+** (Node 20+ recommended)
- **npm 9+**

### Install & run

```bash
# install deps
npm install

# start dev server (Turbopack)
npm run dev
# → http://localhost:3000

# create a production build
npm run build

# run the production server
npm start

# lint
npm run lint
```

---

## 🛠️ Customizing for yourself

All content is centralized in **`src/lib/data.ts`**. Update:

- `personal` — name, headline, email, phone, links, summary
- `rotatingRoles` — the rotating titles in the hero
- `stats` — animated counters in About
- `skillCategories` — Skills section cards
- `experiences` — Experience timeline entries
- `projects` — every project card (set `featured: true` for the top 3 spotlight)
- `advantages` — Competitive Advantage cards
- `socials` / `navLinks`

Replace `public/Resume-Abdul-Moiz.pdf` with your own resume (keep the same filename or update `personal.resumeFile`).

### Theming

Design tokens live in `src/app/globals.css` (CSS custom properties) and `tailwind.config.ts` (color tokens, animations). Tweak the gradient stops in `.gradient-text` and the `cyber.*` colors to recolor the entire site.

---

## ♿ Accessibility & Performance

- Semantic landmarks (`<main>`, `<header>`, `<footer>`, `<nav>`, `<section>`)
- Skip-to-content link
- Focus-visible rings on all interactive elements
- `prefers-reduced-motion` respected (animations disabled, particle field becomes static)
- Custom cursor automatically disabled on touch / coarse-pointer devices
- All images-equivalent decorative effects use `aria-hidden`
- Static prerendering — first byte under 100 ms on most edges

---

## 📦 Dependencies

Runtime: `next`, `react`, `react-dom`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `class-variance-authority`.

Dev: `typescript`, `@types/*`, `tailwindcss`, `tailwindcss-animate`, `postcss`, `autoprefixer`, `eslint`, `eslint-config-next`.

---

## 📜 License

Personal portfolio — code is MIT licensed; brand, name and resume content are © Abdul Moiz.

---

> Made with ☕ and obsession in Islamabad, Pakistan.
