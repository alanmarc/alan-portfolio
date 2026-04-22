# Alan Marcos — Portfolio

Full Stack Engineer portfolio built with React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React.

## Setup

```bash
pnpm install
pnpm dev       # dev server at http://localhost:5173
pnpm build     # production build
pnpm preview   # preview production build
```

## Structure

```
src/
├── main.tsx           # Entry point
├── style.css          # Global styles + Tailwind + CSS variables
├── App.tsx            # Root component with nav
└── components/
    ├── Hero.tsx        # Hero section with stats
    ├── Experience.tsx  # Work experience timeline
    ├── Technologies.tsx # Tech stack with animated bars
    ├── Projects.tsx    # Project cards
    ├── Methodology.tsx # Methodologies & principles
    └── Contact.tsx     # Contact links & footer
```