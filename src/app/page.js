// 'use client'
import React from "react";


export default function Home() {

  // console.log(process.env.NODE_ENV);
  console.log(process.env.SERVER_PASSWORD);
  console.log(process.env.DB_PASSWORD);
  
  return (
    <main className=" min-h-screen px-24 py-4">
      <h1 className="text-center text-bold text-5xl">Home page</h1>
      <h1 className="text-center text-bold text-5xl mt-4">Environment Variable</h1>
      {
        process.env.NODE_ENV == 'development' ? 
        <h1 className="text-center text-bold text-5xl mt-4">You are on Development Build</h1>
        :
        <h1 className="text-center text-bold text-5xl mt-4">You are on Production Build</h1>
      }
    </main>
  )
}

// Note : Environment variables are only work with server component
// Note : console.log() and console.warn() this method will not work in production build.

// To create production build use comd --> yarn run build | npm run build
// To run production build use command --> yarn start | npm start

// To create Environment variables create a file with name --> .env.local