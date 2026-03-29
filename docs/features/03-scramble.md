---
title: "Feature Shape: Scramble"
status: not-started
milestone: M4
date: 2026-03-29
---

## Summary

Generate a random scramble sequence and apply it to the cube,
using a dependency-injected random source for testability.

---

## Problem

Users need a way to scramble the cube to a random state.
The scramble must:

- follow WCA-style conventions (no consecutive same-face moves)
- be reproducible in tests (seeded random)
- be decoupled from `Math.random()` for determinism

---

## Solution

### Random contract

An interface that the scramble use-case depends on:

```typescript
type Random = {
  next(): number // returns a number in [0, 1)
}
```

Two implementations:

- `mathRandom` — wraps `Math.random()` for production
- `seededRandom(seed)` — deterministic PRNG for tests

### Scramble use-case

```typescript
function scramble(
  state: CubeState,
  length: number,
  random: Random
): { state: CubeState; moves: MoveToken[] }
```

1. Generate `length` random move tokens, avoiding consecutive
   moves on the same face
2. Apply the sequence using `applyMoves()`
3. Return both the new state and the move list

---

## Acceptance criteria

- [ ] `Random` contract defined
- [ ] `seededRandom(seed)` produces repeatable sequences
- [ ] Scramble generates the requested number of moves
- [ ] No two consecutive moves are on the same face
- [ ] Same seed produces the same scramble every time
- [ ] Scramble returns both state and move list

---

## Files (planned)

| File | Role |
| ------ | ------ |
| `src/cube/application/contracts/random.ts` | Random contract |
| `src/cube/infrastructure/random/mathRandom.ts` | Production impl |
| `src/cube/infrastructure/random/seededRandom.ts` | Test impl |
| `src/cube/application/use-cases/scramble.ts` | Scramble use-case |
