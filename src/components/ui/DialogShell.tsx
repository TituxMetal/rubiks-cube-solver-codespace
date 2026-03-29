import * as Dialog from '@radix-ui/react-dialog'
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react'

export const DialogShell = Dialog.Root

export const DialogTrigger = Dialog.Trigger

interface DialogContentProps extends ComponentPropsWithoutRef<typeof Dialog.Content> {
  title: string
  description?: string
  children?: ReactNode
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ title, description, children, className, ...props }, ref) => {
    return (
      <Dialog.Portal>
        <Dialog.Overlay className='bg-neutral/60 fixed inset-0 backdrop-blur-xs' />
        <Dialog.Content
          ref={ref}
          {...props}
          className={
            'bg-base-200 fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl p-6 shadow-xl' +
            (className ? ` ${className}` : '')
          }
        >
          <Dialog.Title className='text-lg font-semibold'>{title}</Dialog.Title>
          {description ? (
            <Dialog.Description className='text-base-content/70 mt-2 text-sm'>
              {description}
            </Dialog.Description>
          ) : null}
          {children ? <div className='mt-4'>{children}</div> : null}
          <Dialog.Close asChild>
            <button
              type='button'
              className='btn btn-sm btn-circle btn-ghost absolute top-3 right-3'
              aria-label='Close'
            >
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    )
  }
)

DialogContent.displayName = 'DialogContent'
