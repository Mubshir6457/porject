import React from 'react'
import Image from 'next/image'
import homeImage from "../component/images/p-pic.png"

export const page = () => {
  return (
    <div><figure className="md:flex bg-orange-400 h-25 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-20 md:h-auto md:rounded-none rounded-full mx-auto" src={homeImage} alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Contact number 03253072531”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-red-500 dark:text-sky-400">
         M.MUBASHIR
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page