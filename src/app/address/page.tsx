import React from 'react'
import Image from 'next/image'
import homeImage from "../component/images/h.pic.png"

export const page = () => {
  return (
    <div><figure className="md:flex bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-40 md:h-auto md:rounded-none rounded-full mx-auto" src={homeImage} alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “My house situated in Baghdad Colony near Wirless Pul in Rahim yar khan.Rahim yar khan is a beautiful city.I like it so much.”
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