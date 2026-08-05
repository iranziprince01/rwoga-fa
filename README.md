# Rwoga Family Association

Official website for **Rwoga Family Association** — a refugee-led association founded by Congolese students at African Leadership University (ALU) in Rwanda.

Lighting the way for refugee communities through education, leadership, and collective action.

---

## Overview

This repository contains the production frontend for the association’s public site: storytelling, programs, impact, partnerships, resources, and ways to get involved.

| | |
| --- | --- |
| **Stack** | React 19 · Vite · TypeScript · Tailwind CSS v4 |
| **Routing** | React Router (code-split pages) |
| **Motion** | Framer Motion |
| **Icons** | Lucide React |
| **SEO** | React Helmet Async |

---

## Quick start

**Requirements:** Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

---

## Project structure

```
src/
├── components/     # UI, layout, cards, media, motion, CTAs
├── constants/      # Site config & navigation
├── data/           # Page copy, programs, stories, stats
├── hooks/          # Shared React hooks
├── layouts/        # App shell (navbar + footer)
├── pages/          # Route-level screens
├── routes/         # Router & lazy loading
├── types/          # TypeScript models
└── utils/          # Helpers (cn, icons, images, title case)

public/             # Static assets (logos, partner marks, images)
```

Content and messaging live primarily in `src/data/content.ts` and `src/constants/site.ts`. Update those files first when refreshing copy.

---

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Homepage |
| `/about` | Who we are, meaning of Rwoga, mission, vision, values, story |
| `/programs` | Program directory |
| `/programs/:programId` | Individual program detail |
| `/impact` | Impact stats & success stories |
| `/leadership` | Leadership committee & structure |
| `/get-involved` | Ways to contribute |
| `/partners` | Partnerships & supporters |
| `/donate` | Contribution types & interest form |
| `/transparency` | Resources & governance documents |
| `/gallery` | Visual gallery |
| `/contact` | Contact form & FAQ |

---

## Configuration

Optional Cloudinary setup (images already work with full URLs and local `/public` paths):

```bash
cp .env.example .env
```

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

When set, `CloudinaryImage` / `getImageUrl` can resolve Cloudinary public IDs. Paths starting with `/` or `http` are used as-is.

---

## Design notes

- **Brand colors:** deep green primary, soft coral accent
- **Typography:** Figtree (headings), Calibri / Carlito (body)
- **Logos:** `public/logo1.svg` (light-on-dark), `public/logo2.svg` (color-on-light)

---

## Collaboration notes

- Contact, donate, and newsletter forms are **frontend-ready demos** — wire them to email, CRM, or payment providers before launch.
- Leadership seats are placeholders until confirmed names and photos are available.
- Resource / report downloads on the transparency page are marked coming soon until PDFs are published.
- Prefer editing shared content in `src/data/content.ts` over hardcoding copy inside pages.

---

## Contributing

1. Create a branch from `main`
2. Make focused changes
3. Run `npm run lint` and `npm run build`
4. Open a pull request with a short summary of what changed and why

---

## Contact

**Rwoga Family Association**  
Kigali, Rwanda · African Leadership University  
Email: [rwogafamily@gmail.com](mailto:rwogafamily@gmail.com)

---

© 2026 Rwoga Family Association. All rights reserved.
