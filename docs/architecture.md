# Rubik’s Cube 3×3 – Architecture & Conventions

## Project goal

Implement a Rubik’s Cube 3×3 engine in TypeScript (Vite + React),
with a clear, deterministic, and viewpoint-independent model.

Main priorities:

- conceptual correctness
- readability
- strict separation between human perception and algorithmic logic

Solving algorithms will come later.

---

## Core principle

The cube has a fixed internal reference frame, defined by its centers.
Moves (U, R, F, etc.) are defined once and for all in this frame.

Human perception (cube held differently, visible colors, etc.)
is handled separately via global cube rotations.

---

## Face convention (canonical)

Faces are fixed and named using standard notation:

U (Up)    = White  
D (Down)  = Yellow  
F (Front) = Green  
B (Back)  = Blue  
R (Right) = Red  
L (Left)  = Orange  

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

## Planned development steps

1. Define enums and types (Color, Face, Piece, Cube)
2. Create a canonical solved cube
3. Implement global rotations (x, y, z)
4. Implement basic moves (U, D, L, R, F, B)
5. Add basic tests (same move ×4 = identity)
6. Optional: React visualization

---

## Philosophy

The engine must remain:

- human-readable
- testable
- extensible

Performance and optimal solving come later.
