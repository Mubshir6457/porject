import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (

    <div className='h-39 w-50 bg-gradient-to-r from-red-100 to-blue-300 flex gap-3 p-6 border-blue-300 border-4 p-7'>
      <Link href="/">home page</Link>
      <Link href="/about">about page</Link>
      <Link href="/address">adress page</Link>
      <Link href="/contact">contact page</Link>
    </div>
  )
}

export default Header