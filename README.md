# twjohnwu.github.io

Personal CV + portfolio site for John Wu — R&D Team Lead, Full Stack Engineer.
Live at **[twjohnwu.github.io](https://twjohnwu.github.io/)**.

Bilingual (繁體中文 / English), dark mode, print-friendly.

## Stack

- **Astro 4** — static site generator, content collections
- **Tailwind CSS** — utility styles + print stylesheet
- **Vue** — single client island (stats count-up)
- **Mermaid** — case-study architecture diagrams
- **GitHub Pages** — hosting via GitHub Actions

## Content

All copy is in MDX content collections — edit these to update the site:

| Collection | Path |
|---|---|
| Experience timeline | `src/content/experience/<role>.{zh-TW,en}.mdx` |
| Case studies | `src/content/cases/<slug>.{zh-TW,en}.mdx` |
| Side projects | `src/content/sideProjects/<slug>.{zh-TW,en}.mdx` |
| UI strings | `src/i18n/{zh-TW,en}.json` |

## Development

| Command | Action |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm test` | Vitest unit tests |
| `pnpm build` | Production build into `dist/` |
| `pnpm preview` | Serve `dist/` locally |
| `pnpm astro check` | Type-check content collections |

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml` → builds → publishes to GitHub Pages.
