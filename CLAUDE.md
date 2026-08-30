# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio site built with Angular 19 (standalone components, no NgModules). Content is data-driven rather than hardcoded into templates.

## Commands

```bash
npm start           # ng serve — dev server at http://localhost:4200/, auto-reloads
npm run build       # ng build — production build to dist/portfolio (default config is production)
npm run watch       # ng build --watch --configuration development
npm test            # ng test — Karma/Jasmine unit tests, launches Chrome
```

- Run a single spec file: `ng test --include='**/theme.service.spec.ts'`
- Generate a component consistent with the existing style: `ng generate component features/<name>` (schematics default to SCSS styles; components in this repo are otherwise standalone and hand-written, not scaffolded with the CLI's default template/spec boilerplate — check a sibling component before generating).
- There is no e2e test setup and no linter configured in this repo.

## Architecture

Everything lives under `src/app/`, split into four layers:

- **`core/`** — app-wide singletons, no UI.
  - `data/portfolio.data.ts` is the single source of truth for all page content (profile info, nav items, socials, skills, experience, projects, certifications, about timeline). Editing site content almost always means editing this file, not the components that render it.
  - `models/portfolio.models.ts` defines the readonly interfaces that shape that data.
  - `services/` — one `providedIn: 'root'` service per browser concern: `ThemeService` (dark/light mode via a signal, persisted to `localStorage`, reflected onto `<html data-theme>`), `ScrollService` (smooth-scroll + `IntersectionObserver`-based scroll-spy driving navbar active state, using `NgZone.runOutsideAngular` for the observer callback), `SeoService` (Title/Meta tag updates per route), `ResumeService` (fetches and force-downloads the resume PDF, with an `unavailable` state if the file is missing), `EmailService` (wraps `@emailjs/browser` using config from `core/config/emailjs.config.ts`).
- **`features/`** — one folder per landing-page section (`hero`, `about`, `skills`, `experience`, `projects`, `certifications`, `contact`, `tech-globe`). `home/home.component.ts` composes all of them in order and is the sole routed component (see below). Each feature component pulls its content from `portfolio.data.ts` and stays otherwise self-contained (own `.html`/`.scss`, `ChangeDetectionStrategy.OnPush`).
- **`layout/`** — `navbar` and `footer`, rendered once in `app.component.ts` around the `<router-outlet>`.
- **`shared/`** — reusable, presentation-only pieces used across features: `components/icon` (a single `IconComponent` with an inlined SVG-path registry — add new icons to the `ICONS` map and the `IconName` union in `icon.component.ts`, not as separate components), `components/logo`, `components/resume-button`, `components/section-heading`, `components/theme-toggle`, and `directives/` (`reveal` — scroll-triggered fade/slide-in via `IntersectionObserver`, `ripple` — click ripple effect, `typrewriter` — typing animation for the hero).

### Routing

`app.routes.ts` has effectively one real route (`''`, lazy-loaded `HomeComponent`) plus a wildcard redirect to it — this is a single-page scroller, not a multi-route app. Section navigation (`about`, `skills`, etc.) is anchor/`id`-based scrolling handled by `ScrollService`, not routing. `NAV_ITEMS` in `portfolio.data.ts` is the ordered list of section ids used by both the navbar and the scroll-spy observer.

### Conventions

- Standalone components everywhere; no `NgModule`s. Inject dependencies with `inject()`, not constructor injection.
- Feature/layout components default to `ChangeDetectionStrategy.OnPush` and expose signals/data as `protected readonly`.
- State is signal-based (`signal()`/`effect()`), not RxJS Subjects, for UI state like theme, scroll position, form status.
- SCSS is scoped per component; shared design tokens (colors, spacing, radii, easing, `--brand-*` gradients) are CSS custom properties defined globally in `src/styles.scss`, themed via `[data-theme='dark' | 'light']` selectors on `:root`.
- Single quotes, 2-space indentation (enforced by `.editorconfig`).
