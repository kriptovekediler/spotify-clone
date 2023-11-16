'use client'

import * as Dialog from '@radix-ui/react-dialog'
import {IoMdClose} from 'react-icons/io'

interface ModalProps {
    isOpen:boolean
    onChange: (open: boolean) => void
    title:string
    description:string
}

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal