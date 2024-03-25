import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import StarIcon from '@mui/icons-material/Star'
import Image from 'next/image'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

const UniversityCard = ({
  name,
  description,
  location,
  rating,
}: UniversityCard) => {
  return (
    <div className=' bg-blackPurple/80 px-3 py-4 rounded-lg border border-white/40 cursor-pointer hover:border-green/40 duration-300 hover:scale-[101%]'>
      <div className='top'>
        <Image
          src={'/assets/card-test.jpg'}
          alt={'a photo representing the university'}
          width={1000}
          height={667}
          className='rounded-md'
          placeholder='blur'
          blurDataURL={'/assets/card-test.jpg'}
        />
      </div>
      <div className='bottom mt-3'>
        <h2
          className={`${workSans.className} text-xl font-semibold text-yellow mb-2`}
        >
          {name}
        </h2>
        <p className='text-sm text-justify'>{description}</p>
        <div className='location-rate mt-4 flex items-center justify-between mb-2'>
          <div className='location flex items-center gap-2'>
            <LocationOnIcon className='text-yellow' />
            <p>{location}</p>
          </div>
          <div className='rate flex items-center gap-2'>
            <StarIcon className='text-yellow' />
            <p>
              <span className='font-semibold text-yellow'>{rating}</span> / 5
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversityCard
