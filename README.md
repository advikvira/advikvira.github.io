# Personal Webpage

## Tech Stack

- [Astro](https://astro.build/) v6
- [React](https://react.dev/) v19
- [Tailwind CSS](https://tailwindcss.com/) v3
- [TypeScript](https://www.typescriptlang.org/)

## Dependencies

- `@astrojs/react` — Astro React integration
- `@astrojs/tailwind` — Astro Tailwind integration
- `lucide-react` — icons
- `@fontsource-variable/jetbrains-mono` — JetBrains Mono font
- `@fontsource/road-rage` — Road Rage font
- `prettier` + `prettier-plugin-astro` — code formatting

## Package Manager

- [npm](https://www.npmjs.com/)

## Sections (Home Page)
- About
- Research
- Publications
- Contact

## 🚀 Project Structure

`tree -I 'node_modules|.git'`

```text
├── LICENSE
├── README.md
├── astro.config.mjs
├── dist
│   ├── _astro
│   │   ├── client.T9fhd2RU.js
│   │   └── index.02218aKq.css
│   ├── attachments
│   │   ├── advikvira.jpg
│   │   ├── completeCV.pdf
│   │   └── overview-v2.png
│   ├── index.html
│   └── robots.txt
├── package-lock.json
├── package.json
├── public
│   ├── attachments
│   │   ├── advikvira.jpg
│   │   ├── completeCV.pdf
│   │   └── overview-v2.png
│   └── robots.txt
├── src
│   ├── components
│   │   ├── FluidNavigation.tsx
│   │   ├── sections
│   │   │   ├── About.astro
│   │   │   ├── Contact.astro
│   │   │   ├── Publications.astro
│   │   │   └── Research.astro
│   │   └── ui
│   │       ├── animated-glow-card.tsx
│   │       └── fluid-menu.tsx
│   ├── constants
│   │   ├── about.ts
│   │   ├── news.ts
│   │   └── research.ts
│   ├── pages
│   │   └── index.astro
│   └── styles
│       └── global.css
├── tailwind.config.mjs
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
