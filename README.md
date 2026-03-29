---
title: "Rubik's Cube Solver"
---

## Rubik's Cube Solver

A deterministic, testable 3×3 Rubik's Cube engine and
interactive visualizer built with TypeScript, React, and Vite.

![License](https://img.shields.io/badge/license-MIT-blue)

---

## What is this?

This project implements a complete Rubik's Cube engine from
scratch — no cube libraries, no magic. Every move is a pure
function that permutes pieces and updates orientations,
following real group-theory mechanics.

The UI renders an interactive 2D net of the cube, letting you
apply moves, scramble, and (eventually) solve.

---

## Tech stack

| Layer | Technology |
| ------- | ------------ |
| Language | TypeScript (strict) |
| UI | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 |
| Testing | Vitest |
| State | Nanostore (planned) |
| Architecture | Hexagonal / Clean layers |

---

## Getting started

### Prerequisites

- Node.js 20+ (Bun migration planned)

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your
browser.

### Run tests

```bash
npm test          # watch mode
npm run test:run  # single run
```

---

## Project structure

```text
src/
  cube/
    domain/          Pure model: constants, types, pieces, state
    application/     Use-cases: createSolvedState, applyMoves, …
    infrastructure/  Adapters: rendering pipeline, random
  features/
    cube/            React UI: components, hooks, stores
  shared/            Generic utilities (enum guards)
docs/
  PRD.md             Product requirements & MVP scope
  architecture.md    Architecture and conventions
  vision.md          Project vision (for AI context)
  features/          Feature shape documents
```

See [docs/architecture.md](docs/architecture.md) for full
conventions and layer dependency rules.

---

## Current status

### Done (Milestone 1 — Foundation)

- Domain model: colors, faces, positions, pieces, state
- Type guards and piece factories
- Sticker geometry mapping (54 stickers → pieces)
- `createSolvedState()` use-case
- `toStickers()` rendering pipeline
- 2D net visualization (CubeNet + FaceGrid)
- 37 unit tests passing

### Next up (Milestone 2 — Moves)

- `MoveToken` type for all 18 face moves
- Permutation tables (cycles + orientation deltas)
- `applyMove()` pure function
- Identity tests (move ×4 = state)

See [docs/PRD.md](docs/PRD.md) for the full roadmap.

---

## Architecture

The codebase follows a hexagonal / clean architecture:

```text
domain  ←  application  ←  infrastructure  ←  features (UI)
```

- **Domain** depends on nothing (pure logic)
- **Application** depends on domain only
- **Infrastructure** depends on domain (implements contracts)
- **Features** depends on all layers above (React components)

No layer may depend on a layer to its right. No cycles.

---

## Contributing

This project is in active development. Contributions are
welcome — please open an issue first to discuss what you'd
like to change.

---

## License

[MIT](LICENSE)
