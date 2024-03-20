import React from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import UniverityCard from '../components/universities/UniverityCard'

const Universities = () => {
  return (
    <div className='min-h-screen relative'>
      <div className='title bg-black fixed top-16 w-full py-4 px-4 flex items-center justify-between'>
        <h2 className='text-lg'>Liste des universités</h2>
        <TuneIcon className='text-[28px] text-white/75' />
      </div>
      <div className='content mt-16 px-4'>
        <UniverityCard />
      </div>
    </div>
  )
}

export default Universities
