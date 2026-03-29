import { CubeControls } from './features/cube/components/CubeControls'
import { CubeNet } from './features/cube/components/CubeNet'
import { getDemoStickers } from './features/cube/lib/getDemoStickers'

export const App = () => {
  const stickersByFace = getDemoStickers()

  return (
    <main className='mx-auto flex min-h-screen flex-col items-center gap-6 px-2 py-4'>
      <section className='card ringBorder'>
        <h1 className='title'>Rubik's Cube Solver</h1>
        <p>Welcome to the Rubik's Cube Solver application!</p>
      </section>
      <section className='ringBorder flex w-full flex-col items-start justify-center gap-4 p-4 md:flex-row lg:max-w-lg'>
        <CubeNet stickersByFace={stickersByFace} />
        <CubeControls />
      </section>
    </main>
  )
}
