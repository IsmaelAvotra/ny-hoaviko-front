import React from 'react'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

const ByProvince = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16'>
      <h2
        className={`relative text-xl xl:text-2xl font-medium ${workSans.className}`}
      >
        Université par provinces{' '}
        <span className='bg-yellow rounded h-1 w-16 absolute left-0 -bottom-1'></span>{' '}
      </h2>
      <div className='content'></div>
    </div>
  )
}

export default ByProvince
