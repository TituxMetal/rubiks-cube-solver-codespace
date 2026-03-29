# Progress

> Tracks milestone completion across the project.

## Infrastructure

- [x] Vite + React + TypeScript setup
- [x] Tailwind CSS v4 integration
- [x] Vitest test runner
- [x] ESLint configuration
- [x] Bun package manager migration
- [x] Prettier formatting setup
- [x] Feature shape template
- [x] Documentation restructuring (frontmatter → H1 + blockquote)

## M1 — Foundation

- [x] Domain constants (Color, Face, CornerPosition, EdgePosition)
- [x] Type guards (isColor, isFace, isCornerPosition, isEdgePosition)
- [x] Piece types and factories (CornerPiece, EdgePiece)
- [x] CubeState type definition
- [x] Sticker geometry mapping (stickerMapping, faceIndexInId)
- [x] createSolvedState use-case
- [x] toStickers rendering pipeline
- [x] FaceGrid component
- [x] CubeNet cross-layout component
- [x] CubeControls placeholder
- [x] Face labels on each grid
- [ ] Responsive layout (mobile + desktop)

## M2 — Design System + Moves

### Design System ([plan](~/.claude/plans/rubiks-cube-solver-02-design-system.md))

- [x] DaisyUI installation & plugin configuration (Phase 1)
- [x] Custom "rubiks" dark theme with OKLch colors (Phase 1)
- [x] Cube face colors as Tailwind theme values (Phase 1)
- [x] Page `<title>` fix (Phase 1)
- [x] Color mapping refactor — colors.ts → bg-cube-\* classes (Phase 2)
- [x] Accessible color name map — colorNameByCode (Phase 2)
- [x] FaceGrid semantic HTML + tactile depth (`<figure>`, `<figcaption>`, `<span>`) (Phase 3)
- [x] Sticker cells `role="img"` + `aria-label` with color names (Phase 3)
- [x] Face labels AAA contrast — text-base-content/70 (Phase 3)
- [x] CubeNet `<section>` card with `aria-label` (Phase 3)
- [x] CubeControls `<section>` card (Phase 3)
- [x] App layout — `<header>` navbar + `<main>` (Phase 3)
- [x] Radix Dialog integration — DialogShell with `aria-label="Close"` (Phase 4)
- [x] Final cleanup, accessibility audit & visual verification (Phase 5)

### Moves

- [ ] Move token type (18 face moves)
- [ ] Permutation tables (cycles + orientation deltas)
- [ ] applyMove() pure function
- [ ] Identity tests (move x4 = original state)
- [ ] applyMoves() sequence function

## M3 — Interaction

- [ ] Nanostore cube state
- [ ] useCube() hook
- [ ] Move buttons (U, D, L, R, F, B + inverses + doubles)
- [ ] Move history display
- [ ] Reset button

## M4 — Scramble

- [ ] Random contract interface
- [ ] seededRandom() for tests
- [ ] mathRandom() for production
- [ ] scramble() use-case
- [ ] Scramble button in UI

## M5 — Polish

- [ ] Global rotations (x, y, z)
- [ ] Keyboard shortcuts
- [ ] Responsive layout refinement
- [ ] Accessibility pass
