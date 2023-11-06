'use client'
import React from "react";
import { Poppins } from "next/font/google";
const poppins =  Poppins({
  weight: '100',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <main className=" min-h-screen px-24 py-4">
      <h1 className="text-center text-bold text-5xl">Home page</h1> <br />
      <h2 className={poppins.className}>Hello, I am Deepak!</h2>
      {/* <h2 style={{fontFamily:'Poppins', fontWeight:100}}>Hello, I am Deepak!</h2> */}
    </main>
  )
}
