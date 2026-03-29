# Feature Shape: Cube Domain Model

> Status: done | Milestone: M1 | Date: 2026-03-29

## Summary

Define the core data model for a 3×3 Rubik's Cube: pieces,
positions, orientations, colors, and overall cube state.

---

## Problem

A Rubik's Cube has 26 physical pieces (6 centers, 12 edges,
8 corners) with positions and orientations. The model must be:

- mathematically accurate (group theory friendly)
- independent from human viewpoint
- serializable and comparable (detect solved state)

---

## Solution

### Constants

Enum-like objects for `Color`, `Face`, `CornerPosition`,
`EdgePosition` with derived TypeScript types and type guards.

### Pieces

- `CornerPiece` — id, position, orientation (0–2), 3 colors
- `EdgePiece` — id, position, orientation (0–1), 2 colors

Factory functions: `makeCornerPiece()`, `makeEdgePiece()`,
`makeSolvedCornerPiece()`, `makeSolvedEdgePiece()`.

### State

```typescript
type CubeState = {
  corners: Record<CornerPositionId, CornerPiece>
  edges: Record<EdgePositionId, EdgePiece>
  centers: Record<FaceCode, ColorCode>
}
```

### Geometry

`stickerMapping` maps each face's 9 sticker positions to the
corresponding piece and color index, enabling the rendering
pipeline.

---

## Acceptance criteria

- [x] 6 colors, 6 faces, 8 corner positions, 12 edge positions
- [x] Type guards for all constant types
- [x] Piece factories with validation
- [x] `CubeState` type defined
- [x] Sticker mapping covers all 54 stickers
- [x] `createSolvedState()` returns valid state
- [x] All domain logic is pure (no side effects)

---

## Files

| File                           | Role                      |
| ------------------------------ | ------------------------- |
| `src/cube/domain/constants.ts` | Enum-like constants       |
| `src/cube/domain/guards.ts`    | Type guards               |
| `src/cube/domain/pieces.ts`    | Piece types and factories |
| `src/cube/domain/state.ts`     | CubeState type            |
| `src/cube/domain/geometry.ts`  | Sticker mapping           |
| `src/cube/domain/index.ts`     | Barrel exports            |
| `src/shared/enumGuards.ts`     | Generic guard factories   |
