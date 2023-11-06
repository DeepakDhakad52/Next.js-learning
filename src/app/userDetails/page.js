'use client'
import Script from 'next/script'

const page = () => {
  return (
    <div>
        <Script 
        src='/location.js'
        onLoad={()=>console.log('loaded')}
        />
      <h1>Get user Details</h1>
    </div>
  )
}

export default page
