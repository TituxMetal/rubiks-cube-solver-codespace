---
title: Product Requirements Document – Rubik's Cube Solver
version: "1.0"
status: draft
date: 2026-03-29
---

## Overview

Rubik's Cube Solver is a web-based 3×3 Rubik's Cube engine and
visualizer built in TypeScript with React. The project provides a
deterministic, testable cube model that is independent from any
human viewpoint, paired with an interactive UI.

### Origin

This project started as an AI-assisted coding experiment to
explore what a conversational AI could build autonomously on a
non-trivial algorithmic domain. The initial prototype proved the
approach viable, and the project is now evolving into a
fully-featured, well-documented open-source application.

### Target audience

- Developers curious about algorithmic modeling in TypeScript
- Cubing enthusiasts who want to understand move mechanics
- Anyone interested in AI-assisted software development

---

## Goals

| # | Goal | Priority |
| --- | ------ | ---------- |
| G1 | Accurate, deterministic 3×3 cube model | Must-have |
| G2 | Full set of face moves (U, D, L, R, F, B + inverses + doubles) | Must-have |
| G3 | Interactive 2D net visualization | Must-have |
| G4 | Scramble generation | Must-have |
| G5 | Move history and undo | Should-have |
| G6 | Basic solving algorithm (layer-by-layer or similar) | Should-have |
| G7 | 3D visualization | Nice-to-have |
| G8 | Advanced solvers (CFOP, Kociemba) | Nice-to-have |

---

## MVP scope

The MVP delivers a working cube that a user can manipulate and
scramble in the browser.

### In scope

- **Cube domain model** — pieces, positions, orientations, state
- **18 face moves** — U, U', U2, D, D', D2, L, L', L2,
  R, R', R2, F, F', F2, B, B', B2
- **Global rotations** — x, y, z (and inverses)
- **Solved state** — canonical starting position
- **Scramble** — random move sequence generation
- **2D net rendering** — unfolded cube with color-coded stickers
- **Interactive controls** — buttons for each move, scramble,
  and reset
- **Move notation display** — show applied moves in standard
  notation

### Out of scope (post-MVP)

- Solving algorithms
- 3D rendering (Three.js / WebGL)
- Timer / competition mode
- Cube size variants (2×2, 4×4, etc.)
- Backend / persistence / accounts
- Mobile-native app

---

## Success criteria

| Criterion | Measurement |
| ----------- | ------------- |
| Model correctness | Every move ×4 = identity; solved state is unique |
| Test coverage | All domain and application logic covered by unit tests |
| Determinism | Same input always produces same output (pure functions) |
| Responsiveness | UI updates in under 16 ms after a move |
| Accessibility | Keyboard-navigable controls |

---

## Technical constraints

- **Runtime**: browser only, no server
- **State management**: Nanostore (lightweight, no Redux)
- **Build**: Vite
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Testing**: Vitest
- **Package manager**: Bun (migration planned)
- **Architecture**: hexagonal-inspired layers
  (domain → application → infrastructure → features)

---

## Milestones

### M1 — Foundation (done)

- Domain constants, types, guards
- Piece factories and solved state
- Sticker rendering pipeline
- Basic 2D net UI

### M2 — Moves

- Move token type
- Permutation tables for all 18 face moves
- `applyMove()` pure function
- Identity tests (move ×4)

### M3 — Interaction

- Wire moves to UI buttons
- Nanostore cube state
- Move history display
- Reset button

### M4 — Scramble

- Random contract + seeded implementation
- Scramble use-case
- Scramble button in UI

### M5 — Polish

- Global rotations (x, y, z)
- Keyboard shortcuts
- Responsive layout
- Accessibility pass

---

## Risks

| Risk | Mitigation |
| ------ | ------------ |
| Orientation math errors in move tables | Extensive identity and superflip tests |
| State mutation bugs | All domain functions are pure; freeze state in dev |
| Scope creep toward solver | Strict MVP boundary; solver is post-MVP |
