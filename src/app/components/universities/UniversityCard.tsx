import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import StarIcon from '@mui/icons-material/Star'
import Image from 'next/image'
import { Work_Sans } from 'next/font/google'

const workSans = Work_Sans({ subsets: ['latin'] })

const UniversityCard = () => {
  return (
    <div className=' bg-black p-2 rounded-lg border border-white/40'>
      <div className='top'>
        <Image
          src={'/assets/card-test.jpg'}
          alt={'a photo representing the university'}
          width={1000}
          height={667}
          className='rounded-md'
        />
      </div>
      <div className='bottom mt-3'>
        <h2
          className={`${workSans.className} text-xl font-semibold text-yellow mb-2`}
        >
          Université Mohamed IV
        </h2>
        <p className='text-sm'>
          Rem laudantium beatae et voluptatibus rerum qui quae quibusdam et
          internos dolorem cum sunt atque et voluptatibus rerum qui quae qui.
        </p>
        <div className='location-rate mt-4 flex items-center justify-between mb-2 px-2'>
          <div className='location flex items-center gap-2'>
            <LocationOnIcon className='text-yellow' />
            <p>Casablanca, Maroc</p>
          </div>
          <div className='rate flex items-center gap-2'>
            <StarIcon className='text-yellow' />
            <p>
              <span className='font-semibold text-yellow'>4.5</span> / 5
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversityCard
