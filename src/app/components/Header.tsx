import Link from 'next/link'
import React from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

const Header = () => {
  return (
    <div className='w-full min-h-[70vh] max-w-[1600px] mx-auto mt-4 sm:mt-8 flex items-center justify-center flex-col px-2 sm:px-8 xl:px-20'>
      <h1
        className={`font-extrabold ${workSans.className} text-green text-3xl sm:text-4xl xl:text-5xl text-center mb-4 lg:mb-6`}
      >
        Prepare <span className='text-yellow'>ton avenir </span>
        en choisissant bien ton établissement{' '}
        <span className='text-yellow'>!</span>
      </h1>
      <p className='text-center text-base text-white/80 mb-6 lg:mb-12 text-[15px] sm:text-[16px] sm:px-4 lg:px-8 max-w-[1000px] mx-auto'>
        Ea ipsum laudantium aut sint soluta et porro ullam. Et quasi reiciendis
        ut dolorum consequatur qui voluptatem aliquam. Et nihil voluptate ut
        doloremque eius sit illum ipsam qui nemo beatae sed aliquid numquam.
      </p>
      <Link
        href={'/about'}
        className=' bg-white text-black cursor-pointer px-8 sm:px-12 py-2 rounded flex items-center gap-4'
      >
        Explorer
        <RocketLaunchIcon />
      </Link>
    </div>
  )
}

export default Header
