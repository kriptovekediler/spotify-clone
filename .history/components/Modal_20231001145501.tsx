'use client'

import * as Dialog from '@radix-ui/react-dialog'
import {IoMdClose} from 'react-icons/io'

interface ModalProps {
    isOpen:boolean
    onChange(boolean) => void
}

const Modal = () => {
  return (
    <div>Modal</div>
  )
}

export default Modal