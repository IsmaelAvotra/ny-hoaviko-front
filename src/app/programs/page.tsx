'use client'
import React, { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune'

import SearchComponent from '../utils/common/SearchComponent'
import { getPrograms } from './data'
import FilterModal from './FilterModal'

const ProgramsPage = () => {
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const [selectedType, setSelectedType] = useState('all')
  const [selectedGraduation, setSelectedGraduation] = useState('all')

  const handleSearch = async (newSearchTerm: string) => {
    const fetchedUniversities = await getPrograms(newSearchTerm)
    setFilteredPrograms(fetchedUniversities)
  }

  const applyFilterAndCloseModal = () => {
    setFilterIsOpen(false)
  }

  return (
    <div className='bg-red h-screen flex items-center justify-center'>
      <div className='title bg-black fixed top-16 w-full md:flex md:flex-row-reverse pt-4 pb-2 sm:py-6 md:py-6 md:pt-8 px-4 md:px-6 xl:px-10 flex flex-col gap-4 lg:items-center justify-between z-[99]'>
        <div className='flex items-center justify-between w-full gap-4 md:flex-[1.5]'>
          <SearchComponent
            onSearch={handleSearch}
            placeholder={'Chercher une filière ...'}
          />
          <TuneIcon
            className='text-[28px] md:text-[32px] xl:text-[36px] text-white/75 cursor-pointer hover:text-white'
            onClick={() => setFilterIsOpen(true)}
          />
        </div>
        <h2 className='text-lg md:text-xl xl:text-[22px] md:flex-1 xl:flex-[2]'>
          Liste des filières
        </h2>
      </div>
      {filterIsOpen && (
        <FilterModal
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedGraduation={selectedGraduation}
          setSelectedGraduation={setSelectedGraduation}
          applyFilterAndCloseModal={applyFilterAndCloseModal}
        />
      )}
    </div>
  )
}

export default ProgramsPage
