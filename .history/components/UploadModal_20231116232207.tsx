'use client'

import React from 'react'
import Modal from './Modal'

const UploadModal = () => {
  return (
    <Modal title='Upload Modal Title'
    description='Upload Modal description'
    isOpen
    onChange={() => {}}
    >
        Upload Content
    </Modal>
  )
}

export default UploadModal