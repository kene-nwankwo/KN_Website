# KN Website

Personal portfolio website built with React + TypeScript.

This repository contains the active app in the folder [kn_website_2024](kn_website_2024).

## Tech Stack
- React 18
- TypeScript
- React Router v6
- Material UI
- Create React App tooling

## Project Structure
- App source: [kn_website_2024/src](kn_website_2024/src)
- Public static assets: [kn_website_2024/public](kn_website_2024/public)
- Build output: [kn_website_2024/build](kn_website_2024/build)

## Local Development
From the app directory:

```bash
cd kn_website_2024
npm install
npm start
```

App runs at http://localhost:3000.

## Scripts
Run these from [kn_website_2024](kn_website_2024):

- `npm start`: start dev server
- `npm run build`: production build
- `npm test`: run tests
- `npm run deploy`: build and publish to GitHub Pages (`gh-pages` branch)

## Asset Policy
Heavy static files are served from the `public` folder so they are not bundled into JavaScript.

Canonical locations:
- Documents and media: [kn_website_2024/public/Files](kn_website_2024/public/Files)
- Project PDFs: [kn_website_2024/public/Project PDFS](kn_website_2024/public/Project%20PDFS)

Use URL paths (for example `/Files/...` and `/Project%20PDFS/...`) instead of importing large PDFs/images from `src`.

## GitHub Pages Deployment
This project deploys with the `gh-pages` package.

Deploy command:

```bash
cd kn_website_2024
npm run deploy
```

What happens:
1. `predeploy` runs `npm run build`.
2. The built site is pushed to the `gh-pages` branch.
3. GitHub Pages serves from that branch.

Notes:
- Seeing both `main` and `gh-pages` branches is expected.
- Ahead/behind counts between those branches are normal.
- Custom domain is configured via [kn_website_2024/public/CNAME](kn_website_2024/public/CNAME).
