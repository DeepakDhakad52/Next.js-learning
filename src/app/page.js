// 'use client'
import React from "react";


export default function Home() {
  return (
    <main className=" min-h-screen px-24 py-4">
      {/* <title>Home Page</title> */} {/* This the wrong way to create title, This will create multiple title tags which is not good for SEO */}
      <h1 className="text-center text-bold text-5xl">Home page</h1> <br />
      <img src="/next.svg" />
    </main>
  )
}

export const generateMetadata = () => {
  return {
      title : 'Home Page',
      description: 'Welcome to Home Page'
  }
}
// Note : We can use generateMetadata() in only server component.