# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Keel lab — a marketing/portfolio website for an automation platform. Built with v0.app, deployed on Vercel. Dark-themed, animation-heavy frontend with no backend/API.

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build (TypeScript errors ignored via `next.config.mjs`)
- `pnpm lint` — ESLint

## Tech Stack

- **Next.js 16** (App Router, RSC enabled)
- **React 19**, **TypeScript 5**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`, NOT the legacy `tailwindcss` PostCSS plugin — config lives in `app/globals.css`, no `tailwind.config`)
- **Framer Motion** — primary animation library, used extensively across all pages
- **shadcn/ui** — `new-york` style, CSS variables, Lucide icons. Config in `components.json`
- **Path alias:** `@/*` maps to project root

## Architecture

**Pages** (`app/`): Landing page + 4 subpages (`/ai-automations`, `/go-high-level`, `/n8n`, `/portfolio`). Each page composes section components.

**Sections** (`components/sections/`): Page-level content blocks (hero, features, CTA, etc.). Prefixed by page context: `ai-*`, `ghl-*`, `n8n-*`, `portfolio-*`, or unprefixed for the main landing page.

**Animation components** (`components/`): Reusable visual effects — `particle-background`, `floating-particles`, `sparkles`, `aurora-background`, `cursor-glow`, `magnetic-button`, `text-reveal`, `text-scramble`, `morphing-text`, `typewriter-text`, etc. Most are client components using Framer Motion.

**UI primitives** (`components/ui/`): shadcn/ui components (`button`, `card`).

**Utilities** (`lib/`): `cn()` helper in `lib/utils.ts`, device detection hook in `lib/use-device.ts`.

## Key Patterns

- Hardcoded `dark` class on `<html>` — dark-only theme, no light mode toggle
- `CursorGlow` component rendered in root layout on every page
- `SmoothScroll` wrapper used on landing page
- CSS theme variables defined in `app/globals.css` using oklch color space
- Images are unoptimized (`next.config.mjs`) — all static assets in `public/`
- No database, no API routes, no auth — purely static/presentational
