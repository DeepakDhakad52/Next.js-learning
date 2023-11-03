'use client'
import React from 'react'


function page({params}) {
    // console.log(params);
  return (
    <main className=" p-24">
      <h1 className="text-center text-bold text-5xl">Student Details</h1><br />
      <h2 className='text-center'>Name : {params.student}</h2>
    </main>
  )
}

export default page
