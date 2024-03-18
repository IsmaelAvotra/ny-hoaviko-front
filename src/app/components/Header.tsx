import Link from 'next/link'
import React from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

const Header = () => {
  return (
    <div className='w-full min-h-[60vh] mt-8 flex items-center justify-center flex-col'>
      <h1 className='font-extrabold text-[#386641] text-4xl text-center mb-4'>
        Prepare <span className='text-[#FFFBBD]'>ton avenir </span>
        en choisissant bien ton école <span className='text-[#FFFBBD]'>!</span>
      </h1>
      <p className='text-center text-base text-[#fefefe]/90 mb-6 px-1'>
        Ea ipsum laudantium aut sint soluta et porro ullam. Et quasi reiciendis
        ut dolorum consequatur qui voluptatem aliquam. Et nihil voluptate ut
        doloremque eius sit illum ipsam qui nemo beatae sed aliquid numquam.
      </p>
      <Link
        href={'/'}
        className='bg-[#fefefe] text-[#050F1D] px-8 py-2 rounded flex items-center gap-4'
      >
        Explorer
        <RocketLaunchIcon />
      </Link>
    </div>
  )
}

export default Header
