'use client'

import { useEffect, useState } from "react"

import Modal from "@/components/Modal"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return(
        <>
        <Modal title="Test Modal" 
        description="Description" 
        isOpen
        onChange={() => {}}
        >
        Test Children
        </Modal>
        </>
    )
}

export default ModalProvider