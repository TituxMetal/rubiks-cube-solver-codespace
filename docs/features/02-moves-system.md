---
title: "Feature Shape: Moves System"
status: not-started
milestone: M2
date: 2026-03-29
---

## Summary

Implement the 18 face moves (U, U', U2, D, D', D2, L, L', L2,
R, R', R2, F, F', F2, B, B', B2) as pure permutation functions
on `CubeState`.

---

## Problem

A face move on a Rubik's Cube is a permutation of pieces
combined with orientation updates. Each of the 6 faces has
3 variants: clockwise (e.g. `U`), counter-clockwise (`U'`),
and double (`U2`). All 18 moves must be:

- pure functions (no mutation)
- deterministic
- composable (apply sequences)
- verifiable (move ×4 = identity for quarter turns)

---

## Solution

### Move tokens

A `MoveToken` type representing all 18 standard moves plus
the 6 global rotations (x, y, z and inverses).

```typescript
type FaceMove =
  | "U" | "U'" | "U2"
  | "D" | "D'" | "D2"
  | "L" | "L'" | "L2"
  | "R" | "R'" | "R2"
  | "F" | "F'" | "F2"
  | "B" | "B'" | "B2"

type MoveToken = FaceMove
```

### Permutation tables

For each base move (U, D, L, R, F, B), a table describes:

- **Corner cycle**: which 4 corner positions are permuted
- **Edge cycle**: which 4 edge positions are permuted
- **Corner orientation deltas**: how each corner's orientation
  changes (0, +1, or +2 mod 3)
- **Edge orientation deltas**: how each edge's orientation
  changes (0 or 1)

Inverse and double moves are derived from the base table:

- Inverse = cycle in reverse order, negate orientation deltas
- Double = apply base table twice

### `applyMove(state, token)`

Pure function that:

1. Looks up the permutation table for the token
2. Creates a new state with pieces moved to new positions
3. Updates orientations according to deltas
4. Returns the new `CubeState`

### `applyMoves(state, tokens[])`

Convenience function: fold over a sequence of tokens.

---

## Acceptance criteria

- [ ] `MoveToken` type covers all 18 face moves
- [ ] Permutation table defined for each of the 6 base moves
- [ ] `applyMove()` returns a new state (no mutation)
- [ ] Every quarter-turn move applied 4 times returns the
      original state (identity test)
- [ ] Every double move applied 2 times returns the original
      state
- [ ] `applyMoves()` correctly applies a sequence
- [ ] Superflip or known patterns produce expected sticker
      output

---

## Files (planned)

| File | Role |
| ------ | ------ |
| `src/cube/domain/moves/tokens.ts` | MoveToken type |
| `src/cube/domain/moves/tables.ts` | Permutation tables |
| `src/cube/domain/moves/apply.ts` | applyMove function |
| `src/cube/domain/moves/index.ts` | Barrel exports |
| `src/cube/application/use-cases/applyMoves.ts` | Sequence use-case |

---

## Open questions

- Should we include slice moves (M, E, S) in the MVP or
  derive them from face moves?
- Should wide moves (u, r, etc.) be in scope?
