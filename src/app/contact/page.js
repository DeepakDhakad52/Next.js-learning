import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="p-24">
      <h1 className="text-bold text-5xl">Contact page</h1><br />
      <Link href='/'>Go to Home page</Link>
    </main>
  )
}

export default page
