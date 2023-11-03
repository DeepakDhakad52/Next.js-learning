'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {

  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
  }

  return (
    <main className=" min-h-screen p-24">
      <h1 className="text-bold text-5xl">Home page</h1> <br />
      <Link href={'/about'}>Go to About page</Link> <br />
      <Link href={'/contact'}>Go to Contact page</Link> <br />
      <br /><br /><br /><br />
      <button onClick={()=>navigate('about')} >Go to About page</button>
      <button onClick={()=>navigate('contact')} className="mx-16">Go to Contact page</button>
    </main>
  )
}
