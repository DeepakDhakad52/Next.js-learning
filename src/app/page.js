'use client'
import React from "react";
import Image from "next/image";
import profile from '../../public/vercel.svg'

export default function Home() {
  // console.log(profile);

  return (
    <main className=" min-h-screen px-24 py-4">
      <h1 className="text-center text-bold text-5xl">Home page</h1> <br />
      {/* <Image src={profile} />
      <img src={profile.src} /> */}
      <Image
        src={'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png'}
        width={500}
        height={500}
      /> {/* This Image will not work until you will configure the domain in next.config.js file */}
    </main>
  )
}
