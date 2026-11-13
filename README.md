# Vita Devlog

Devlog and documentation for Project Vita, built with [Astro Starlight](https://starlight.astro.build)
and [starlight-blog](https://github.com/HiDeoo/starlight-blog). Pushing to `main` publishes the site
to GitHub Pages through `.github/workflows/deploy.yml`.

## Commands

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm install`   | Install dependencies                          |
| `npm run dev`   | Local preview at `localhost:4321/vita-devlog/` |
| `npm run build` | Build the site into `dist/`                   |

## Writing

- Devlog posts: `src/content/docs/blog/<slug>.md`, with `title`, `date` and optional `tags` and `excerpt`.
- Game docs: `src/content/docs/game/`.
- Images: put them next to the post and link them relatively (`![alt](./shot.png)`).

This repository is public. Only copy in material that is meant to be published. Internal plans,
reference research and PDFs stay in the game repository.
