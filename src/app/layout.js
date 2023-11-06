import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
      </head> */}

      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}

const Navbar = () => {
  const li_style = 'mx-4';
  return (
    <nav >
      <ul className='flex p-4 justify-center shadow' >
        <li className={li_style}><Link href={'/'}>Home</Link></li>
        <li className={li_style}><Link href={'/products'}>Product List</Link></li>
      </ul>
    </nav>
  )
}