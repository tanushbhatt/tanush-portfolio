# Tanush Bhatt — Personal Portfolio

**Computer Engineering Student | Aspiring Data Scientist | Python & AI**

**Live site:** _not deployed yet — add your Render URL here after you deploy (see [Deployment](#deployment-on-render))._

## About

This is the source code of my personal portfolio website. It presents my projects, skills, internship, education, certifications and hackathons, with a focus on Python, Data Science, Machine Learning and AI. Everything on the page comes from small data files in `src/data/`, so updating the content never requires touching the layout code.

## Features

- **Responsive design** for desktop, laptop, tablet and phone (no horizontal scrolling)
- **Light / Dark / System theme** switcher; the choice is remembered, and "System" follows the device setting live
- **Project showcase** with a featured project (AgriYield AI), tech stacks, GitHub buttons and a details dialog
- **Skills** grouped by area, **Experience**, **Education**, **Certifications**, **Hackathons**
- **Contact** section with email (including a copy button), LinkedIn, GitHub and resume view/download
- **SEO**: page title, meta description, Open Graph tags, structured data, semantic HTML
- **Accessibility**: skip link, keyboard navigation, visible focus, ARIA labels, good colour contrast, reduced-motion support
- **Fast and light**: no UI library, no animation library; fonts are self-hosted

## Tech stack

| Area      | Tools                                                         |
| --------- | ------------------------------------------------------------- |
| Framework | React 19                                                      |
| Build     | Vite                                                          |
| Styling   | Plain CSS with design tokens (CSS variables)                  |
| Fonts     | Inter and JetBrains Mono via Fontsource (self-hosted)         |
| Quality   | ESLint, GitHub Actions (lint + build on every push)           |
| Hosting   | Render (static site)                                          |

There is no backend and there are no environment variables or API keys.

## Project structure

```text
tanush-portfolio/
├── .github/workflows/ci.yml     # Lint + build check on every push / pull request
├── public/                      # Files served as-is
│   ├── images/projects/         # Project screenshots (currently placeholders)
│   ├── resume/                  # Tanush-Bhatt-Resume.pdf lives here
│   ├── favicon.svg, apple-touch-icon.png, og-image.png, robots.txt
├── src/
│   ├── components/              # Navbar, ThemeToggle, Button, ProjectCard, ProjectModal, Footer, ...
│   ├── sections/                # Hero, About, Projects, Skills, Experience, Education,
│   │                            # Certifications, Hackathons, Contact
│   ├── data/                    # <-- Edit your content here (profile, projects, skills, ...)
│   ├── hooks/                   # useTheme, useScrollSpy, useRevealOnScroll
│   ├── styles/                  # tokens.css (colours for both themes) + one file per area
│   ├── utils/asset.js           # Builds URLs for files in /public
│   ├── App.jsx                  # Page layout
│   └── main.jsx                 # Entry point
├── index.html                   # SEO tags + pre-paint theme script
├── render.yaml                  # Optional Render Blueprint (headers + caching)
├── eslint.config.js, vite.config.js, package.json, package-lock.json
└── .node-version                # Node version used by Render and GitHub Actions
```

## Local installation

You need **Node.js 20.19+ or 22.12+** (check with `node -v`). Download it from <https://nodejs.org> if needed.

```bash
git clone <your-repository-url>
cd tanush-portfolio
npm install
npm run dev
```

Open the address shown in the terminal (usually <http://localhost:5173>). The page reloads when you save a file.

| Command           | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the development server                       |
| `npm run build`   | Create the production build in `dist/`             |
| `npm run preview` | Serve the production build locally to test it      |
| `npm run lint`    | Check the code for common mistakes                 |

## Production build

```bash
npm run build
npm run preview
```

`npm run build` writes the finished site to the `dist/` folder. `npm run preview` serves that folder at <http://localhost:4173> so you can test exactly what Render will host.

## Things you must replace

| File                                          | What to do                                                                 |
| --------------------------------------------- | -------------------------------------------------------------------------- |
| `public/resume/Tanush-Bhatt-Resume.pdf`       | **Replace with your real resume.** It is currently a clearly marked placeholder. Keep the same file name. |
| `public/images/projects/agriyield-ai.png`     | Replace with a real screenshot (1600 × 900 px recommended).                |
| `public/images/projects/spark-ai-assistant.png` | Replace with a real screenshot.                                          |
| `public/images/projects/ai-reel-generator.png` | Replace with a real screenshot.                                           |

Keep the same file names and the pictures update automatically. If you use a different name, change the `image` path in `src/data/projects.js`.

## Editing the content

All text lives in `src/data/`:

- `profile.js` — name, tagline, bio, email, GitHub, LinkedIn, About text, hero "focus path"
- `projects.js` — project cards. Add `demo: "https://..."` to a project **only when a real live demo exists**; a "Live Demo" button then appears automatically
- `skills.js`, `experience.js`, `education.js`, `certifications.js`, `hackathons.js`

Only add results to hackathons (winner, finalist, rank) if they are real.

## Themes (Light / Dark / System)

- Colours are defined once in `src/styles/tokens.css` as CSS variables, with a separately tuned set for Light and for Dark.
- `index.html` runs a tiny script before the page paints, so there is no flash of the wrong theme.
- `src/hooks/useTheme.js` saves the choice in `localStorage` (key `theme`). With **System** selected, the site follows the operating-system setting, even if it changes while the page is open.

To change the accent colour, edit `--accent`, `--btn-bg` and related variables in both theme blocks of `tokens.css`.

## GitHub Actions

`.github/workflows/ci.yml` runs on every push to `main` and on pull requests. It installs dependencies, runs `npm run lint` and `npm run build`. If it shows a red cross on GitHub, something would also have broken the Render build. It does not deploy anything; Render does that by itself.

## Uploading the project to GitHub

1. Create an empty repository on GitHub (for example `tanush-portfolio`). Do not add a README or `.gitignore` there.
2. In the project folder run:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

`git add .` includes the `.github` folder automatically, so there is no separate upload step for it. The `.gitignore` keeps `node_modules/` and `dist/` out of the repository (Render rebuilds them).

## Deployment on Render

### Option A: Static Site (recommended)

1. Create a GitHub repository and push the code (see above).
2. Sign in at <https://render.com> (you can use your GitHub account).
3. Click **New > Static Site**.
4. Connect your GitHub account and select the portfolio repository.
5. Choose the branch to deploy: `main`.
6. Set the **Build Command** to:

   ```text
   npm install && npm run build
   ```

7. Set the **Publish Directory** to:

   ```text
   dist
   ```

8. Click **Create Static Site** and wait for the first deploy to finish.
9. Open the `onrender.com` address Render gives you and check the site: navigation, theme switcher, projects, resume button.
10. Copy that address into the **Live site** line at the top of this README, and into `index.html` (next section).
11. From now on, every push to `main` redeploys the site automatically.

The Node version is pinned by `.node-version`, which Render reads automatically.

### Option B: Blueprint (optional)

Choose **New > Blueprint**, select the repository, and Render reads `render.yaml`, which also adds security headers and long-term caching for built assets.

### After deploying: link previews

Open `index.html`, replace `YOUR-SITE-URL` with your real address, and remove the comment wrapper around the `og:url` / `og:image` tags. Then LinkedIn, WhatsApp and X show the preview picture (`public/og-image.png`) when you share your link.

## Troubleshooting

- **Build fails on Render:** check the log; confirm the Build Command and Publish Directory exactly as above.
- **Resume button shows the placeholder:** replace `public/resume/Tanush-Bhatt-Resume.pdf`, commit and push.
- **Theme seems stuck:** clear the site's data in your browser, or run `localStorage.removeItem("theme")` in the console.
- **`npm install` errors about Node:** upgrade Node to 20.19+ or 22.12+.

## License

Code and content © Tanush Bhatt. All rights reserved.
