import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  return (
    <div className='bg-[#02182B] px-4 sm:px-6 py-2 flex items-center justify-between'>
      <div className='logo w-[48px] sm:w-[56px] h-auto'>
        <Image
          src={'/logo-fictif.png'}
          alt={'logo for ny hoaviko application'}
          width={1000}
          height={1000}
        />
      </div>
      <div className='signbtn-menu flex items-center gap-4 sm:gap-6'>
        <Link
          href={'/'}
          className=' border border-[#fefefe] text-[#fefefe] text-sm px-3 py-[6px] sm:py-2 rounded'
        >
          Se connecter
        </Link>
        <MenuIcon className='text-[28px] text-[#fefefe]' />
      </div>
    </div>
  )
}

export default Navbar
