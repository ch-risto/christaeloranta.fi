# christaeloranta.fi

Personal website of Christa Eloranta — developer, designer, and maker. Live at [christaeloranta.fi](https://christaeloranta.fi).

## Tech stack

| Tool | Why |
| :--- | :--- |
| [Astro](https://astro.build) | Ships minimal JavaScript by default, making the site fast without sacrificing a component-based workflow. |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS that keeps styles close to markup and removes the need for a separate design-system layer. |
| [TypeScript](https://www.typescriptlang.org) | Catches mistakes at edit time instead of at runtime. |
| [Vercel](https://vercel.com) | Zero-config deployment with edge functions for server-side features like the contact form. |
| ESLint + Prettier + Husky | Consistent code style enforced automatically on every commit. |

## Project structure

```
src/
├── assets/         # Images and fonts processed by Astro
├── components/
│   ├── layout/     # Header, Footer
│   ├── ui/         # Reusable UI components (Button, Hero, Accordion…)
│   └── form/       # Contact form and inputs
├── layouts/        # Page wrappers
├── pages/          # File-based routing — each file becomes a URL
└── styles/         # Global CSS and font definitions
public/             # Static files served as-is (robots.txt, images)
```

## Commands

Run from the project root:

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run format` | Format all files with Prettier |
| `npm run lint` | Lint the codebase with ESLint |
