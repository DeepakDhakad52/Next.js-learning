'use client'
import React from "react";
import custom from './custom.module.css'
import outside from './outside.module.css'
import other from '@/styles/other.module.css'

export default function Home() {

  return (
    <main className=" min-h-screen px-24 py-4">
      <h1 className="text-center text-bold text-5xl">Home page</h1> <br />
      <h3 className={custom.main} >Leaning Next js</h3>
      <h3 className={other.main} >Leaning Next js</h3>
      <h3 className={outside.main} >Leaning Next js</h3>
    </main>
  )
}
