'use client'

import useAuthModal from "@/hooks/useAuthModal"
import Modal from "./Modal"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useRouter } from "next/navigation"

const AuthModal = () => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const {session} = useSessionContext()
    const {onClose, isOpen} = useAuthModal()
  return (
    <Modal 
    title="Welcome back" 
    description="Login to your account" 
    isOpen={isOpen}
    onChange={() => {}}
    >
        
        <Auth 
        theme="dark"
        magicLink
        providers={['github']}
        supabaseClient={supabaseClient} 
        appearance={{
            theme: ThemeSupa,
            variables: {
                default: {
                    colors: {
                        brand: '#404040',
                        brandAccent: '#22c55e'
                    }
                }
            }
        }}/>
    </Modal>
  )
}

export default AuthModal