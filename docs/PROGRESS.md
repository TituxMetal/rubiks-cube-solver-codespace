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
- [ ] Face labels on each grid
- [ ] Responsive layout (mobile + desktop)

## M2 — Moves + Design System

- [ ] Design system: DaisyUI + Radix integration
- [ ] Design system: custom dark theme with OKLch colors
- [ ] Design system: cube face colors as CSS custom properties
- [ ] Design system: refactor existing components to DaisyUI classes
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
