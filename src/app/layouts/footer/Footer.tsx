import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Link from 'next/link'

const links: LinksInterface[] = [
  { name: 'Home', link: '/' },
  { name: 'Universities', link: '/' },
  { name: 'Filières', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/' },
]

const Footer = () => {
  return (
    <div className='bg-[#02182B] text-white/90 px-2 py-4'>
      <div className='hidden lg:flex justify-between lg:px-8'>
        <div>
          <p className='text-center lg:text-start mb-4 text-lg'>
            Suivez nous sur les réseaux :
          </p>
          <div className='socials flex text-yellow items-center lg:justify-start justify-center gap-4 lg:gap-8 mb-4'>
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
        </div>
        <ul className={`hidden lg:flex items-center gap-8`}>
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

      <div className='flex items-center justify-center mb-2'>
        <p>
          Made with{' '}
          <span className='mx-1 text-red'>
            <FavoriteIcon />
          </span>
          <span className='mx-2'>by</span>
        </p>
        <Link href={'/'} className='font-semibold'>
          Ismael Avotra
        </Link>
      </div>
      <p className='text-center text-xs text-white/75'>
        © Copyright 2024 | All Rights Reserved!
      </p>
    </div>
  )
}

export default Footer
