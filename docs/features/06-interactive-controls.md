# Feature Shape: Interactive Controls

> Status: not-started | Milestone: M3 | Date: 2026-03-29

## Summary

Provide UI controls that let the user apply moves, scramble,
and reset the cube, with a visible move history.

---

## Problem

The cube model is pure and stateless. The UI needs to:

- hold the current `CubeState` in reactive state
- let users trigger moves via buttons
- show which moves have been applied
- allow reset to solved state

---

## Solution

### State management (Nanostore)

A single store holds the current `CubeState` and move history:

```typescript
// cube.store.ts
const $cubeState = atom<CubeState>(createSolvedState())
const $moveHistory = atom<MoveToken[]>([])
```

### Hook

`useCube()` exposes actions to components:

- `state` — current cube state
- `stickers` — derived sticker map
- `history` — list of applied moves
- `move(token)` — apply a single move
- `scramble()` — apply random scramble
- `reset()` — return to solved state
- `undo()` — revert last move (Should-have)

### Controls component

`CubeControls` renders:

- 6 groups of 3 buttons each (U/U'/U2, D/D'/D2, etc.)
- Scramble button
- Reset button
- Move history display (notation string)

---

## Acceptance criteria

- [ ] Nanostore holds cube state reactively
- [ ] Each of the 18 moves has a clickable button
- [ ] Scramble button applies a random sequence
- [ ] Reset button returns to solved state
- [ ] Move history is displayed in standard notation
- [ ] UI updates immediately after each action
- [ ] Keyboard shortcuts for common moves (Should-have)

---

## Files (planned)

| File                                            | Role            |
| ----------------------------------------------- | --------------- |
| `src/features/cube/stores/cube.store.ts`        | Reactive state  |
| `src/features/cube/hooks/useCube.ts`            | Actions hook    |
| `src/features/cube/components/CubeControls.tsx` | Buttons UI      |
| `src/features/cube/components/MoveHistory.tsx`  | History display |
