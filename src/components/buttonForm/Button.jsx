"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Button = () => {
    const router = useRouter();
  return (
    <div>
        <button onClick={() => router.push("/new")}>Registrarse</button>
    </div>
  )
}

export default Button