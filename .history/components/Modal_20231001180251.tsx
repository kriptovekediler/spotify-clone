'use client'

import * as Dialog from '@radix-ui/react-dialog'
import {IoMdClose} from 'react-icons/io'

interface ModalProps {
    isOpen:boolean
    onChange: (open: boolean) => void
    title:string
    description:string
    children:React.ReactNode
}

const Modal:React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
  return (
    <Dialog.Root
    onOpenChange={onChange}
    open={isOpen}
    defaultOpen={isOpen}
    >
        <Dialog.Portal>
            <Dialog.Overlay
            className='
            bg-neutral-900/90
            backdrop-blur-sm
            
            inset-0
            '
            />
        </Dialog.Portal>
        {children}
    </Dialog.Root>
  )
}

export default Modal