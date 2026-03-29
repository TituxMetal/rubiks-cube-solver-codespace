# Rubik's Cube 3×3 – Architecture & Conventions

> Status: active | Date: 2026-03-29

## Project goal

Implement a Rubik's Cube 3×3 engine in TypeScript (Vite + React),
with a clear, deterministic, and viewpoint-independent model.

Main priorities:

- conceptual correctness
- readability
- strict separation between human perception and algorithmic logic

For full scope and milestones, see [PRD.md](PRD.md).

---

## Core principle

The cube has a fixed internal reference frame, defined by its centers.
Moves (U, R, F, etc.) are defined once and for all in this frame.

Human perception (cube held differently, visible colors, etc.)
is handled separately via global cube rotations.

---

## Face convention (canonical)

Faces are fixed and named using standard notation:

```text
U (Up)    = White
D (Down)  = Yellow
F (Front) = Green
B (Back)  = Blue
R (Right) = Red
L (Left)  = Orange
```

This convention never changes inside the engine.

---

## Physical structure of the cube

The cube is composed of 26 physical pieces:

Centers (6)

- One color
- Fixed relative to each other
- Define the cube reference frame

Edges (12)

- Two colors
- Have an orientation (0 or 1)

Corners (8)

- Three colors
- Have an orientation (0, 1, or 2)

The cube must NOT be modeled as 54 independent stickers.

---

## Named positions (standard notation)

Corner positions:

- UFR, URB, UBL, ULF
- DFR, DRB, DBL, DLF

Edge positions:

- UF, UR, UB, UL
- DF, DR, DB, DL
- FR, FL, BR, BL

---

## Data model intent

Each piece must know:

- its colors
- its current position
- its orientation

Pieces are identified independently from their current position.

---

## Move definition

A move (U, R, F, etc.) is:

- a permutation of pieces
- plus orientation updates

Examples:

- U affects only pieces whose position starts with "U"
- U does not flip edges
- U updates corner orientations using fixed rules

Each move is:

- deterministic
- pure
- independent from human viewpoint

---

## Human vs algorithm separation

Human side:

- sees colors
- talks about “top face”, “front face”
- may hold the cube differently

Algorithm side:

- only knows U, D, L, R, F, B
- never changes its rules
- always applies the same moves

Translation is done via:

- global cube rotations
- never by redefining moves

---

## Constraints

- Never rename U, D, L, R, F, B
- Never define a move based on visible colors
- Always use global cube rotations to reorient the cube

---

## Development roadmap

See [PRD.md](PRD.md) for detailed milestones. Summary:

1. **M1 — Foundation** (done): domain model, solved state,
   sticker rendering, 2D net UI
2. **M2 — Moves**: move tokens, permutation tables,
   `applyMove()`, identity tests
3. **M3 — Interaction**: Nanostore state, move buttons,
   history display, reset
4. **M4 — Scramble**: random contract, scramble use-case,
   scramble button
5. **M5 — Polish**: global rotations, keyboard shortcuts,
   responsive layout, accessibility

Feature details live in [docs/features/](features/).

---

## Philosophy

The engine must remain:

- human-readable
- testable
- extensible

Performance and optimal solving come later.
