'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const links: LinksInterface[] = [
  { name: 'Home', link: '/' },
  { name: 'Universities', link: '/' },
  { name: 'Filières', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='bg-blackPurple z-[9999]'>
      <div className='px-4 sm:px-6 lg:px-12 py-2 flex items-center justify-between max-w-[1800px] mx-auto'>
        <div className='logo w-[48px] sm:w-[56px] h-auto'>
          <Image
            src={'/logo-fictif.png'}
            alt={'logo for ny hoaviko application'}
            width={1000}
            height={1000}
          />
        </div>
        <div className='nav z-20'>
          <ul
            className={`flex flex-col lg:flex-row gap-8 xl:gap-14 2xl:gap-16 pt-8 lg:pt-0 lg:items-center lg:gap-8 lg:pb-0 pb-12 absolute lg:static bg-blackPurple lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-8 transition-all duration-500 ease-in ${
              menuOpen ? 'top-16' : 'top-[-490px]'
            }`}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className='md:text-lg text-white/90 hover:text-yellow duration-500 active:text-yellow focus:text-yellow'
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className='signbtn-menu flex items-center gap-4 sm:gap-6'>
          <Link
            href={'/'}
            className=' border border-white text-white hover:bg-white hover:text-black text-sm px-3 py-[6px] sm:py-2 rounded'
          >
            Se connecter
          </Link>
          <div onClick={() => setMenuOpen(!menuOpen)} className='lg:hidden'>
            {menuOpen ? (
              <CloseIcon className='text-[28px] text-red' />
            ) : (
              <MenuIcon className='text-[28px] text-white' />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
