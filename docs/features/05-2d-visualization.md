# Feature Shape: 2D Net Visualization

> Status: in-progress | Milestone: M1 | Date: 2026-03-29

## Summary

Render the cube state as a 2D unfolded net (cross layout)
with color-coded stickers using React and Tailwind CSS.

---

## Problem

Users need a clear visual representation of all 54 stickers.
The 2D net is the simplest way to show all 6 faces at once
in a familiar layout.

---

## Solution

### Rendering pipeline

```text
CubeState → toStickers() → StickersByFace → CubeNet → FaceGrid
```

1. `toStickers()` (infrastructure) converts `CubeState` into
   a flat map of face → 9 color codes
2. `CubeNet` (React) positions 6 `FaceGrid` components in a
   CSS Grid cross layout
3. `FaceGrid` renders a 3×3 grid of colored divs

### Layout (cross pattern)

```text
         [U]
    [L]  [F]  [R]  [B]
         [D]
```

### Color mapping

Each `ColorCode` maps to a Tailwind class:

- `Wt` → `bg-zinc-100`
- `Yl` → `bg-amber-300`
- `Rd` → `bg-red-500`
- `Og` → `bg-orange-500`
- `Bl` → `bg-blue-500`
- `Gn` → `bg-green-500`

---

## Acceptance criteria

- [x] `toStickers()` converts any `CubeState` to sticker map
- [x] Solved state renders 6 uniform-color faces
- [x] `CubeNet` displays all 6 faces in cross layout
- [x] `FaceGrid` renders 3×3 grid with correct colors
- [x] Color mapping covers all 6 colors
- [x] Face labels displayed on each face
- [ ] Responsive: works on mobile and desktop

---

## Files

| File                                           | Role                  |
| ---------------------------------------------- | --------------------- |
| `src/cube/infrastructure/render/toStickers.ts` | State → stickers      |
| `src/features/cube/components/CubeNet.tsx`     | Cross layout          |
| `src/features/cube/components/FaceGrid.tsx`    | Single face grid      |
| `src/features/cube/lib/colors.ts`              | Color → CSS class map |
| `src/features/cube/lib/getDemoStickers.ts`     | Demo data             |
