# Rwoga Family Association

Official frontend for the **Rwoga Family Association** — a refugee-led youth association founded by Congolese refugee students at African Leadership University (ALU), Rwanda.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- React Router
- Framer Motion
- Lucide React
- React Helmet Async

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   # UI, cards, layout, media, motion
  pages/        # Route pages
  sections/     # Page sections (expandable)
  layouts/      # Main layout shell
  data/         # Content & placeholders
  routes/       # Router + code splitting
  hooks/        # Shared hooks
  types/        # TypeScript models
  utils/        # Helpers (cn, Cloudinary, icons)
  constants/    # Site & navigation config
```

## Cloudinary

Images use a Cloudinary-ready helper (`getImageUrl` / `CloudinaryImage`).  
Full Unsplash URLs work today; switch to Cloudinary public IDs by setting:

```
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

## Notes

- Impact statistics are structural / early-stage only — no fabricated beneficiary totals.
- Contact, donate, and newsletter forms are frontend demos ready to wire to a backend.
- Leadership names are placeholder seats pending confirmed bios.
