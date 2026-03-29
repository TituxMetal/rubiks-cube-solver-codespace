import { DialogContent, DialogShell, DialogTrigger } from './components/ui'
import { CubeControls } from './features/cube/components/CubeControls'
import { CubeNet } from './features/cube/components/CubeNet'
import { getDemoStickers } from './features/cube/lib/getDemoStickers'

export const App = () => {
  const stickersByFace = getDemoStickers()

  return (
    <>
      <header className='navbar bg-base-200 shadow-sm'>
        <nav className='mx-auto flex w-full max-w-5xl items-center justify-between'>
          <h1 className='text-xl font-semibold'>Rubik's Cube Solver</h1>
          <DialogShell>
            <DialogTrigger asChild>
              <button type='button' className='btn btn-ghost btn-sm'>
                About
              </button>
            </DialogTrigger>
            <DialogContent
              title="Rubik's Cube Solver"
              description="A browser-based Rubik's Cube simulator and solver. Visualize cube state, apply moves, scramble, and solve — all in the browser."
            />
          </DialogShell>
        </nav>
      </header>
      <main className='mx-auto flex w-full max-w-5xl flex-col items-center gap-6 p-4 md:flex-row md:items-start'>
        <CubeNet stickersByFace={stickersByFace} />
        <CubeControls />
      </main>
    </>
  )
}
