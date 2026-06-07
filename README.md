# my-projects — Binny Chopra Portfolio

A personal portfolio for a frontend / software engineer, built with **React 19**,
**Vite 8**, and **Tailwind CSS v4**. Dark/light theming, scroll-reveal animations,
animated stats, and a working contact form.

## Tech stack

- **React 19** — function components + hooks, no deprecated APIs
- **Vite 8** — dev server and production builds
- **Tailwind CSS v4** — utility-first styling via the `@tailwindcss/vite` plugin
  (CSS-first config with `@theme`, no `tailwind.config.js`, no PostCSS)
- **ESLint flat config** with the React Hooks and React Refresh plugins
- **FormSubmit** for the contact form (no backend required)

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

> Requires Node.js 20.19+ or 22.12+ (Vite 8 requirement).

## Project structure

```
my-projects/
├── index.html              # entry HTML (fonts + pre-paint theme script)
├── vite.config.js          # Vite + React + Tailwind plugins
├── public/assets/          # profile.jpg (1:1) and the résumé PDF
└── src/
    ├── components/
    │   ├── common/         # Button, Container, Reveal, CountUp,
    │   │                   #   SectionHeading, SocialLinks, ThemeToggle, Icon
    │   ├── layout/         # Navbar, Footer, ScrollProgress
    │   └── sections/       # Hero, About, Skills, Experience, Projects,
    │                       #   Education, Contact
    ├── context/            # ThemeContext + ThemeProvider
    ├── hooks/              # useTheme, useInView, useActiveSection,
    │                       #   useScrollProgress, useCountUp, useContactForm
    ├── data/               # all content (personal, skills, experience, projects…)
    ├── constants/          # config + magic values (storage keys, endpoints, etc.)
    ├── styles/             # index.css — Tailwind import, theme tokens, base layer
    ├── utils/              # small helpers (cx, scrollToSection)
    ├── App.jsx             # composes layout + sections
    └── main.jsx            # entry point (StrictMode + ThemeProvider)
```

- **Content** lives in `src/data/` — edit a job, skill, or project there and nothing else.
- **Config** (storage keys, the Devicon CDN base, the FormSubmit endpoint, the nav
  offset) lives in `src/constants/`.
- **Theme tokens** are CSS variables in `src/styles/index.css`, mapped to Tailwind via
  `@theme inline` so utilities like `bg-surface`, `text-dim`, and `border-line` are
  automatically theme-aware.

## Replacing the profile photo

The hero shows a **square (1:1)** image at `public/assets/profile.jpg`. Replace that
file with your own 1:1 crop (keep the filename) — no code changes needed.

## Company & university logos

The experience and education sections show each organisation's real logo, loaded
by domain from the Clearbit logo service (no logo artwork is bundled or recreated).
Each entry in `src/data/experience.js` and `src/data/education.js` has a `domain`
plus a `short`/`color` monogram. If a logo can't be fetched, the component falls
back to the monogram automatically, so the layout never looks broken. To force a
specific bundled logo, drop an SVG/PNG in `public/assets/logos/` and point the
entry at it instead of (or alongside) the domain.

## Contact form setup (one-time)

The form posts to [FormSubmit](https://formsubmit.co) and sends messages to the email
in `src/data/personal.js`. The **first** submission triggers a confirmation email from
FormSubmit — click the activation link once, and every message after that is delivered
automatically. To hide the email from the page source, replace it with the random alias
FormSubmit provides after activation (the endpoint base lives in `src/constants/`).

## Theming

The theme defaults to the visitor's OS preference and can be toggled in the navbar.
The choice is saved to `localStorage`, and an inline script in `index.html` applies it
before first paint to avoid a flash of the wrong colours.

## Deployment

Run `npm run build` and deploy the `/dist` folder to any static host (GitHub Pages,
Netlify, Vercel…). `vite.config.js` uses a relative `base`, so it works at the domain
root or in a sub-path without changes.
