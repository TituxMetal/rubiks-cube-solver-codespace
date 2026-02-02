import type { ColorCode } from '../../../cube/domain'

export const stickerClassByColor: Record<ColorCode, string> = {
  Wt: 'bg-zinc-100',
  Yl: 'bg-amber-300',
  Rd: 'bg-red-500',
  Og: 'bg-orange-500',
  Bl: 'bg-blue-500',
  Gn: 'bg-green-500'
} as const
