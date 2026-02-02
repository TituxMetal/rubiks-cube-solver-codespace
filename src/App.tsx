import { CubeControls } from './features/cube/components/CubeControls'
import { CubeNet } from './features/cube/components/CubeNet'
import { getDemoStickers } from './features/cube/lib/getDemoStickers'

export const App = () => {
  const stickersByFace = getDemoStickers()

  return (
    <main className='min-h-screen px-2 mx-auto py-4 flex flex-col items-center gap-6'>
      <section className='card ringBorder'>
        <h1 className='title'>Rubik's Cube Solver</h1>
        <p>Welcome to the Rubik's Cube Solver application!</p>
      </section>
      <section className='flex-col md:flex-row gap-4 items-start justify-center w-full lg:max-w-2/6 flex ringBorder p-4'>
        <CubeNet stickersByFace={stickersByFace} />
        <CubeControls />
      </section>
    </main>
  )
}
