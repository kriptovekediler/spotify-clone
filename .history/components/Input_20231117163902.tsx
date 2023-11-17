'use client'
import React, { forwardRef } from 'react'

interface InputProps
extends React.InputHTMLAttributes<HTMLInputElement>{}

const Input = forwardRef<HTMLInputElement, InputProps>(({
className,
type,
disabled,
...props
}, ref) => {
    <input/>
})

export default Input