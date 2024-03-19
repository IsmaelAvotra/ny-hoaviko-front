import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#02182B] text-[#fefefe]/90 px-2 py-4'>
      <p className='text-center mb-4 text-lg'>Suivez nous sur les réseaux :</p>
      <div className='socials flex text-[#FFFBBD] items-center justify-center gap-4 mb-4'>
        <Link href={'/'}>
          <FacebookIcon />
        </Link>
        <Link href={'/'}>
          <InstagramIcon />
        </Link>
        <Link href={'/'}>
          <XIcon />
        </Link>
        <Link href={'/'}>
          <LinkedInIcon />
        </Link>
      </div>
      <div className='flex items-center justify-center mb-2'>
        <p>
          Made with{' '}
          <span className='mx-1 text-[#EE353E]'>
            <FavoriteIcon />
          </span>
          <span className='mx-2'>by</span>
        </p>
        <Link href={'/'} className='font-semibold'>
          Ismael Avotra
        </Link>
      </div>
      <p className='text-center text-xs text-[#fefefe]/75'>
        © Copyright 2024 | All Rights Reserved!
      </p>
    </div>
  )
}

export default Footer
