# Feature Shape: Design System (DaisyUI + Radix)

> Status: not-started | Milestone: M2 | Date: 2026-03-29

## Problem

The current UI uses raw Tailwind utility classes with no component library, making it hard to
maintain consistent styling and accessibility. Cube face colors are hardcoded Tailwind classes
(`bg-red-500`, `bg-zinc-100`), not themeable. There is no accessible primitive layer for
interactive elements like dialogs or tooltips.

## Solution (Broad Strokes)

Integrate DaisyUI as the semantic component styling layer and Radix UI as the accessible
interactive primitive layer. Create a custom dark theme with OKLch colors. Define cube face colors
as CSS custom properties for theming consistency.

- DaisyUI provides styled components via CSS classes (`btn`, `card`, `kbd`, `tooltip`, `badge`)
- Radix provides headless, accessible primitives (Dialog, Tooltip) with DaisyUI styling on top
- A custom dark theme ("rubiks") defines the color palette using OKLch
- Cube face colors are decoupled from Tailwind classes via CSS custom properties

## User Flow

1. User opens the app and sees a polished dark-themed interface
2. Cube face colors are vivid and consistent across all views
3. Move buttons have a tactile, keyboard-key aesthetic (`kbd` style)
4. Tooltips on hover explain move notation
5. Settings or help are accessible via an accessible dialog

## Dependencies

**Requires:**

- Milestone 1 Foundation (done) — existing CubeNet, FaceGrid, CubeControls components
- Tailwind CSS v4 integration (done)

**Enables:**

- M3 Interactive Controls — buttons will use DaisyUI `btn`/`kbd` classes
- M5 Polish — responsive layout, accessibility built on Radix primitives

## What Must Exist (Backend)

N/A — this is a frontend-only project.

## What Must Exist (Frontend)

- DaisyUI installed and configured via `@plugin` in globals.css
- Custom "rubiks" theme with OKLch semantic colors (primary, secondary, accent, base, etc.)
- Cube face colors as CSS custom properties (`--cube-white`, `--cube-red`, etc.)
- Updated color mapping from `ColorCode` to CSS custom properties
- Refactored `FaceGrid` sticker cells with tactile depth (shadow, hover glow)
- Refactored `CubeNet` layout using DaisyUI card/container patterns
- Refactored `CubeControls` placeholder to use DaisyUI button/kbd styles
- `DialogShell` component wrapping Radix Dialog with DaisyUI modal classes
- App layout updated to use DaisyUI semantic classes (`navbar`, `footer`, etc.)

## Open Questions

1. Should the theme support light mode or stay dark-only for now?
2. Which Radix primitives are needed beyond Dialog? (Tooltip, ToggleGroup?)
3. Should cube face colors be configurable by the user (theme picker) or fixed?

## Out of Scope

- Light mode / multiple themes
- Full component library build-out beyond what current features need
- Animation system (deferred to M5 Polish)
- 3D rendering or WebGL

## Risks / Gotchas

- DaisyUI v5 uses `@plugin` directive (Tailwind v4 syntax) — different from v4's `tailwind.config`
- Radix Dialog needs careful integration: Radix provides behavior, DaisyUI provides styling
- Sticker color mapping refactor touches the rendering pipeline — must not break existing tests
- OKLch colors may render slightly differently across browsers — test on Chrome and Firefox
