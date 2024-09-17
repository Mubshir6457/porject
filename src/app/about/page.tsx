import React from 'react'
import Image from 'next/image'
import homeImage from "../component/images/my-pic.jpg"

const page = () => {
  return (
    <div><figure className="md:flex bg-green-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-20 h-20 md:w-30 md:h-auto rounded-full mx-auto" src= {homeImage} alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hello I am MUBASHIR.I am a AI student.I am very happy to learn about AI.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-red-500 dark:text-sky-400">
          M.MUBASHIR
        </div>
        <div className="text font-lg-medium-slate-700 dark:text-slate-500">
          AI student,Rahim Yar Khan.
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page