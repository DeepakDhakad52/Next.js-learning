import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="p-24">
      <h1 className="text-bold text-5xl">About Teacher Portal</h1><br />
      {/* <Link href='/'>Go to Home page</Link><br /> */}
      <Link href='/about'>Go to About page</Link><br /> 
    </main>
  )
}

export default page
