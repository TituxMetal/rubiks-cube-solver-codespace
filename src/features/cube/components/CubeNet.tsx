import type { ColorCode, FaceCode } from '../../../cube/domain'
import { FaceGrid } from './FaceGrid'

interface CubeNetProps {
  stickersByFace: Record<FaceCode, readonly ColorCode[]>
}

export const CubeNet = ({  stickersByFace}: CubeNetProps) => {
  return (
    <section className='grid grid-cols-4 grid-rows-3 gap-6 place-items-center'>
      <FaceGrid stickers={stickersByFace.U} label='U' className='col-start-2 row-start-1' />
      <FaceGrid stickers={stickersByFace.D} label='D' className='col-start-2 row-start-3' />
      <FaceGrid stickers={stickersByFace.F} label='F' className='col-start-2 row-start-2' />
      <FaceGrid stickers={stickersByFace.B} label='B' className='col-start-4 row-start-2' />
      <FaceGrid stickers={stickersByFace.L} label='L' className='col-start-1 row-start-2' />
      <FaceGrid stickers={stickersByFace.R} label='R' className='col-start-3 row-start-2' />
    </section>
  )
}
