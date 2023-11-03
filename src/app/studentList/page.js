import Link from 'next/link'
import React from 'react'

function page() {
    const list = ['Deepak','Hritik','Mohit','Dhakad'];
  return (
    <div className='p-24'>
      <h1 className='text-center text-bold text-5xl'>Student List</h1>
      <br />
      <ul>
        {
            list.map(student=><li className='text-center'><Link href={`/studentList/${student}`}>{student}</Link></li>)
        }
      </ul>
    </div>
  )
}

export default page
