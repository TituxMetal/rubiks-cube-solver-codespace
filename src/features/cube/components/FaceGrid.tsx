import type { ColorCode, FaceCode } from '../../../cube/domain'
import { stickerClassByColor } from '../lib/colors'

interface FaceGridProps {
  stickers: readonly ColorCode[]
  className?: string
  label?: FaceCode
}

export const FaceGrid = ({ stickers, label, className }: FaceGridProps) => {
  if (import.meta.env.DEV && stickers.length !== 9) {
    throw new Error(`FaceGrid expects 9 stickers, got ${stickers.length}`)
  }

  return (
    <div className={`inline-flex flex-col gap-2 ${className}`}>
      {label ? <div className='label'>{label}</div> : null}

      <div className='faceGrid size-14'>
        {stickers.slice(0, 9).map((color, index) => (
          <div key={index} className={['faceCell', stickerClassByColor[color]].join(' ')} />
        ))}
      </div>
    </div>
  )
}
