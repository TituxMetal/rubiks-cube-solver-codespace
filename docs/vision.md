# Rubik’s Cube 3×3 – Project Vision (for Copilot)

## Goal

Build a Rubik’s Cube 3×3 engine in TypeScript (Vite + React). The engine must be:

- deterministic and testable
- independent from UI and human viewpoint
- functional (no classes required)
UI (React) will visualize and drive the engine.

No database, no persistence layer. Runtime state lives in the frontend (Nanostore).

## High-level Architecture

We use a layered structure inspired by hexagonal / clean architecture, but **no “ports” folder**.
We use **contracts** only when a use-case needs a non-deterministic dependency (e.g., random for scrambles).

Layers:

- `cube/domain`: pure domain model and rules (no React, no browser APIs, no I/O)
- `cube/application`: orchestration (use-cases) built on the domain
- `cube/infrastructure`: technical adapters (e.g., random implementation, rendering mappers for UI)
- `features/cube`: React feature (components, hooks, Nanostore) using the engine

Dependency rules (strict):

- domain depends on nothing (except `shared/`)
- application depends on domain
- infrastructure depends on domain (and may implement application contracts)
- features (UI) depends on cube/* and components/ui
- never the other way around (avoid cycles)

## Folder Structure

```text
src/
  cube/
    domain/
      constants.ts           # Color, Face, CornerPosition, EdgePosition (+ derived TS types)
      guards.ts              # isColor/isFace/isCornerPosition/isEdgePosition
      pieces.ts              # CornerPiece / EdgePiece types + orientations + ids
      state.ts               # CubeState shape
      invariants.ts          # validateState(), isSolved(), etc. (pure)
      moves/
        tokens.ts            # MoveToken type ("U", "R'", "F2"...)
        tables.ts            # pure move tables (cycles + orientation deltas)
        apply.ts             # applyMove(state, token) (pure)
      index.ts               # re-exports

    application/
      contracts/
        random.ts            # Random contract for reproducible scrambles
      use-cases/
        createSolvedState.ts # build solved CubeState
        applyMoves.ts        # apply a MoveToken[] sequence
        scramble.ts          # generate scramble + apply using Random contract
        solve.ts             # later
      index.ts

    infrastructure/
      random/
        seededRandom.ts      # deterministic random (for tests)
      render/
        toStickers.ts        # CubeState -> 6 faces x 9 stickers (UI-friendly)
      index.ts

  features/
    cube/
      stores/
        cube.store.ts        # Nanostore holding CubeState
      hooks/
        useCube.ts           # calls use-cases; updates Nanostore
      components/
        CubeNet.tsx          # 2D net rendering
        CubeControls.tsx     # buttons: U/R/F, scramble, reset, solve
      types/
        viewModels.ts        # Sticker, FaceGrid, etc.

  shared/
    enumGuards.ts            # makeValueGuard / makeKeyGuard (generic)
```

## Current Status

We already implemented enum-like constants and generic guards:

- Color, Face
- CornerPosition, EdgePosition
- makeValueGuard(obj)
- makeKeyGuard(obj)

Unit tests exist as `.spec.ts` files next to implementation files.

## Conventions

- Positions are **identifiers**:
  - Corner positions: "UFR", "URB", ...
  - Edge positions: "UF", "UR", ...
  These identifiers are treated as keys, not as mutable values.
- Moves are defined in the engine reference frame (U, D, L, R, F, B). UI perspective is separate.
- Favor data-driven move tables + pure functions.

## What to implement next (strict order)

1) `cube/domain/pieces.ts`
   - Define types for physical pieces:
     - CornerPiece: id, colors (3), position, orientation (0|1|2)
     - EdgePiece: id, colors (2), position, orientation (0|1)
   - Define derived TS types:
     - ColorCode = typeof Color[keyof typeof Color]
     - FaceCode = typeof Face[keyof typeof Face]
     - CornerPosId = keyof typeof CornerPosition
     - EdgePosId = keyof typeof EdgePosition

2) `cube/domain/state.ts`
   - Define `CubeState` as position-indexed records:
     - corners: Record<CornerPosId, CornerPiece>
     - edges: Record<EdgePosId, EdgePiece>
     - (optional) centers: Record<FaceCode, ColorCode>

3) `cube/application/use-cases/createSolvedState.ts`
   - Build a canonical solved CubeState from constants.
   - Provide unit tests:
     - all positions exist (8 corners, 12 edges)
     - each position maps to exactly one piece
     - in solved state, piece.id === piece.position
     - orientations are all 0

4) `cube/infrastructure/render/toStickers.ts`
   - Convert CubeState -> stickers for UI:
     - output structure: Record<FaceCode, ColorCode[]> where each face has length 9
   - Add tests:
     - solved cube produces 6 uniform faces (all 9 stickers same color per face)

Only after (1)-(4) are done:
5) implement one move (U) with tests (U x4 = identity)
6) implement remaining moves
7) UI wiring (CubeNet + Controls)

## Testing

- Use Vitest.
- Keep `.spec.ts` alongside modules.
- Prefer invariants:
  - counts (8 corners / 12 edges)
  - uniqueness
  - closure checks via guards
  - move identities (move x4 = identity)
  - sequence + inverse returns to solved
