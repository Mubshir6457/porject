import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (

    <div className='flex gap-3 p-6 bg-green-200'>
      <Link href="/">home page</Link>
      <Link href="/about">about page</Link>
      
    </div>
  )
}

export default Header