'use client'
import React from 'react'

function page({params}) {
    // console.log(params);
  return (
    <main className=" p-24">
      <h1 className="text-center text-bold text-5xl">Day {params.lectures[0]}</h1><br />
      <h2 className='text-center'>Lecture Number : {params.lectures[1]}</h2>
    </main>
  )
}

export default page
