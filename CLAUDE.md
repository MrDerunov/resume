# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project purpose

This repo is for crafting and maintaining a professional resume, deployed as a GitHub Pages site at `derunov.github.io`.

## Raw materials (gitignored)

All source materials live in `raw/` and are excluded from version control:

- `raw/linked-in-profile.pdf` — full LinkedIn profile export
- `raw/MyWins.pdf` — career accomplishments and wins
- `raw/old/` — previous versions of the resume (Sergey Derunov, Software Developer / Senior Software Developer)
- `raw/examples/` — reference articles and example resumes

## Site structure

- `index.html` — single-page resume site with all sections
- `assets/css/style.css` — styles (dark/light themes, responsive, print)
- `assets/js/main.js` — theme toggle, scroll animations
- `assets/data/resume.json` — single source of truth for all resume data

## Resume sections

1. **Hero** — name, title, key stats, contact links, summary
2. **Career Changelog** — non-standard format: each position as a product version (v1.0–v4.0) with Added/Changed/Fixed/Deprecated
3. **Casebook** — 6 key wins in Context → Problem → Solution → Result format
4. **Technology Radar** — skills organized by category with primary/secondary tags
5. **Classic Resume** — ATS-optimized section (single column, standard headings, quantified X-Y-Z bullets, flat skill lists) with PDF download button

## AI/ATS optimization features

- JSON-LD structured data (`Person`, `ProfilePage` Schema.org types) in `<head>` for AI agents
- Semantic HTML with `itemscope`/`itemtype` for experience entries
- Print stylesheet (`@media print`) for PDF generation — hides non-classic sections, outputs clean A4 resume
- Single-column classic section with standard headings ("Experience", "Skills", "Education")

## Viewing locally

Open `index.html` in a browser. No build step required.

## Deployment

GitHub Pages from the main branch. Push to `main` to deploy.
