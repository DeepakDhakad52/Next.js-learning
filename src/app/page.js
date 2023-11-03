'use client'

import React from "react";

export default function Home() {

  const [fullname, setFullname] = React.useState('Deepak');

  const app = (item) => {
    alert(item);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello My name is {fullname}</h1>
      <button onClick={()=>app('hello')}>Hello</button>
    </main>
  )
}
