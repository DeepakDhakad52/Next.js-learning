import Link from 'next/link'
import React from 'react'

function Aboutlayout({ children }) {
    return (
        <div>
            <div className='flex p-4 justify-center shadow-sm'>
                <Link className='mx-2' href={'/about/student'}>Go to Student Portal</Link><br />
                <Link className='mx-2' href={'/about/teacher'}>Go to Teacher Portal</Link>
            </div>
            {children} 
        </div>
    )
}

export default Aboutlayout
