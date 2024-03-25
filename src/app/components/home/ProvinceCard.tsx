import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProvinceCard: React.FC<ProvinceInterface> = ({ name, path }) => {
  return (
    <Link
      className='w-full bg-black border border-white hover:border-green/40 rounded-md px-8 sm:px-12 py-4 sm:py-8 flex flex-col gap-2 sm:gap-4 items-center duration-200 hover:scale-[101%]'
      href={'/'}
    >
      <Image
        src={path}
        alt={'ilustration for graduation'}
        width={800}
        height={800}
        className='w-[50%] xl:w-[40%]'
      />
      <p className='text-center tex-[18px] sm:tsxt-[20px] md:text-[22px] font-semibold'>
        {name}
      </p>
    </Link>
  )
}

export default ProvinceCard
