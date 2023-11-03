import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className=" p-24">
      <h1 className="text-bold text-5xl">About page</h1><br />
      <Link href={'/'}>Go to Home page</Link><br />
      <Link href={'/about/student'}>Go to Student Portal</Link><br />   
      <Link href={'/about/teacher'}>Go to Teacher Portal</Link>
    </main>
  )
}

export default page
