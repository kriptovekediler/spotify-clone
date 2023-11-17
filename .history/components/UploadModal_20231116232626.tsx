'use client'

import React from 'react'
import Modal from './Modal'
import useUploadModal from '@/hooks/useUploadModal'

const UploadModal = () => {
    const uploadModal = useUploadModal()

    const onChange = (open: boolean) => {
        if(!open) {
            uploadModal.onClose()
        }
    }
  return (
    <Modal title='Upload Modal Title'
    description='Upload Modal description'
    isOpen
    onChange={onChange}
    >
        Upload Content
    </Modal>
  )
}

export default UploadModal