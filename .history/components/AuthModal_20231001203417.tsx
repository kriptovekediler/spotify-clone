'use client'

import Modal from "./Modal"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useRouter } from "next/navigation"

const AuthModal = () => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const {session} = useSessionContext()

  return (
    <Modal title="Welcome back" description="Login to your account" isOpen onChange={() => {}}>
        Auth modal children!
        <Auth supabaseClient={supabaseClient} appearance={{
            theme: ThemeSupa,
            variables: {
                default: {
                    colors: {
                        brand: '#404040',
                        brandAccent: ''
                    }
                }
            }
        }}/>
    </Modal>
  )
}

export default AuthModal