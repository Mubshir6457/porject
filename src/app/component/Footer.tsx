import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (

    <div className='fixed bottom-0 left-0 justify-center flex gap-3 p-6 h-30 w-full bg-gradient-to-r from-red-100 to-blue-300 border-blue-300 border-4 p-8'>
      <Link href="/#">private page</Link>
      <Link href="/about">about page</Link>
      
    </div>
  )
}

export default Footer