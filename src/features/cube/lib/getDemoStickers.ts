import type { ColorCode, FaceCode } from '../../../cube/domain'

export const getDemoStickers = () => {
  return {
    U: ['Wt', 'Wt', 'Wt', 'Wt', 'Wt', 'Wt', 'Wt', 'Wt', 'Wt'],
    D: ['Gn', 'Gn', 'Rd', 'Og', 'Yl', 'Rd', 'Yl', 'Bl', 'Bl'],
    F: ['Gn', 'Gn', 'Gn', 'Gn', 'Gn', 'Gn', 'Og', 'Yl', 'Yl'],
    B: ['Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Bl', 'Rd', 'Yl', 'Bl'],
    L: ['Og', 'Og', 'Og', 'Og', 'Og', 'Og', 'Og', 'Yl', 'Yl'],
    R: ['Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'Rd', 'Gn', 'Yl', 'Yl']
  } as Record<FaceCode, readonly ColorCode[]>
}
