import React from 'react'

interface SidebarProps {
    children: React.ReactNode
}
const Sidebar:React.FC<SidebarProps> =  ({children}) => {
  return (
    {children}
  )
}

export default Sidebar