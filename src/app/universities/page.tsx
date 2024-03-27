'use client'
import { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune'

import UniversityCard from '../components/universities/UniversityCard'
import SearchComponent from '../utils/common/SearchComponent'
import { getUniversities } from './data'
import FilterModal from './FilterModal'
import NoResults from './NoResults'

const Universities = () => {
  const [filteredUniversities, setFilteredUniversities] = useState([])
  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const [selectedType, setSelectedType] = useState('all')
  const [selectedProvince, setSelectedProvince] = useState('all')

  const handleSearch = async (newSearchTerm: string) => {
    const fetchedUniversities = await getUniversities(newSearchTerm)
    setFilteredUniversities(fetchedUniversities)
  }

  const applyFilterAndCloseModal = () => {
    setFilterIsOpen(false)
    const filtered = filteredUniversities.filter((university: any) => {
      if (selectedType !== 'all' && university.type !== selectedType) {
        return false
      }
      if (
        selectedProvince !== 'all' &&
        university.province !== selectedProvince
      ) {
        return false
      }
      return true
    })
    console.log('selectedType=>', selectedType)
    console.log('selectedProvince=>', selectedProvince)

    setFilteredUniversities(filtered)
  }

  return (
    <div className='min-h-screen relative pb-16'>
      <div className='title bg-black fixed top-16 w-full md:flex md:flex-row-reverse pt-4 pb-2 sm:py-6 md:py-6 md:pt-8 px-4 md:px-6 xl:px-10 flex flex-col gap-4 lg:items-center justify-between z-[99]'>
        <div className='flex items-center justify-between w-full gap-4 md:flex-[1.5]'>
          <SearchComponent
            onSearch={handleSearch}
            placeholder={'Chercher une université ...'}
          />
          <TuneIcon
            className='text-[28px] md:text-[32px] xl:text-[36px] text-white/75 cursor-pointer hover:text-white'
            onClick={() => setFilterIsOpen(true)}
          />
        </div>
        <h2 className='text-lg md:text-xl xl:text-[22px] md:flex-1 xl:flex-[2]'>
          Liste des universités
        </h2>
      </div>
      {filteredUniversities.length > 0 ? (
        <div className='content mt-28 md:mt-24 px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:px-8'>
          {filteredUniversities.map((university: University) => {
            let averageRatings = 0
            const allRatings = university.ratings.map((rating) => rating.rating)

            if (allRatings.length > 0) {
              const sum = allRatings.reduce(
                (total, rating) => total + rating,
                0
              )
              averageRatings = sum / allRatings.length
            }
            return (
              <UniversityCard
                key={university.univID}
                name={university.univName}
                description={university.presentation}
                location={university.univLocation?.city}
                rating={parseFloat(averageRatings.toFixed(1))}
              />
            )
          })}
        </div>
      ) : (
        <NoResults />
      )}

      {filterIsOpen && (
        <FilterModal
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
          applyFilterAndCloseModal={applyFilterAndCloseModal}
        />
      )}
    </div>
  )
}

export default Universities
