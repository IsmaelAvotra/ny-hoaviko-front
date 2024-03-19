import React from 'react'
import { Work_Sans } from 'next/font/google'
import ProvinceCard from './ProvinceCard'

const workSans = Work_Sans({ subsets: ['latin'] })

const provinces: ProvinceInterface[] = [
  {
    name: 'Antananarivo',
    path: '/assets/tana.svg',
  },
  {
    name: 'Antsiranana',
    path: '/assets/diego.svg',
  },
  {
    name: 'Fianarantsoa',
    path: '/assets/fianara.svg',
  },
  {
    name: 'Mahajanga',
    path: '/assets/majunga.svg',
  },
  {
    name: 'Toamasina',
    path: '/assets/tamatave.svg',
  },
  {
    name: 'Toliara',
    path: '/assets/tulear.svg',
  },
]

const ByProvince = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-16'>
      <h2
        className={`relative text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-medium ${workSans.className}`}
      >
        Université par provinces{' '}
        <span className='bg-yellow rounded h-1 w-16 absolute left-0 -bottom-1 md:-bottom-2'></span>{' '}
      </h2>
      <div className='content xl:px-4 2xl:px-8 mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8'>
        {provinces.map((province) => {
          return (
            <ProvinceCard
              key={province.name}
              name={province.name}
              path={province.path}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ByProvince
