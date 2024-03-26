'use client'
import { useEffect, useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune'

import UniversityCard from '../components/universities/UniversityCard'
import SearchComponent from '../utils/common/SearchComponent'
import { getUniversities } from './data'

const Universities = () => {
  const [filteredUniversities, setFilteredUniversities] = useState([])
  const [filterIsOpen, setFilterIsOpen] = useState(false)
  const [selectedType, setSelectedType] = useState('all')
  const [selectedProvince, setSelectedProvince] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      const initialUniversities = await getUniversities()
      setFilteredUniversities(initialUniversities)
    }
    fetchData()
  }, [])

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
    setFilteredUniversities(filtered)
  }

  return (
    <div className='min-h-screen relative pb-16'>
      <div className='title bg-black fixed top-16 w-full md:flex md:flex-row-reverse pt-4 pb-2 sm:py-6 md:py-6 md:pt-8 px-4 md:px-6 xl:px-10 flex flex-col gap-4 lg:items-center justify-between z-[99]'>
        <div className='flex items-center justify-between w-full gap-4 md:flex-[1.5]'>
          <SearchComponent onSearch={handleSearch} />
          <TuneIcon
            className='text-[28px] md:text-[32px] xl:text-[36px] text-white/75 cursor-pointer hover:text-white'
            onClick={() => setFilterIsOpen(true)}
          />
        </div>
        <h2 className='text-lg md:text-xl xl:text-[22px] md:flex-1 xl:flex-[2]'>
          Liste des universités
        </h2>
      </div>
      <div className='content mt-28 md:mt-24 px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:px-8'>
        {filteredUniversities.map((university: University) => {
          let averageRatings = 0
          const allRatings = university.ratings.map((rating) => rating.rating)

          if (allRatings.length > 0) {
            const sum = allRatings.reduce((total, rating) => total + rating, 0)
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
      {filterIsOpen && (
        <div className='bg-black/75 text-black h-screen w-full fixed top-0 left-0 flex items-center justify-center z-[999] px-2'>
          <div className='bg-white px-2 py-4 min-h-80 w-full rounded-md'>
            <h3 className='text-center text-[18px] font-medium mb-2 text-blackPurple'>
              Ajouter des filtres
            </h3>
            <form action='' className='mt-8 grid grid-cols-1 gap-4'>
              <div className='flex flex-col gap-[6px]'>
                <label htmlFor='univ_type' className='text-[15px] font-medium'>
                  Type d'université :
                </label>
                <select
                  name='type'
                  id='univ_type'
                  className=' px-2 py-2 rounded border border-blackPurple/40 font-light'
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value='all'>Tout</option>
                  <option value='private'>Privée</option>
                  <option value='public'>Public</option>
                  <option value='semi-private'>Semi-privée</option>
                </select>
              </div>
              <div className='flex flex-col gap-[6px]'>
                <label htmlFor='univ_type' className='text-[15px] font-medium'>
                  Par province :
                </label>
                <select
                  name='type'
                  id='univ_type'
                  className=' px-2 py-2 rounded border border-blackPurple/40 font-light'
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  <option value='all'>Tout</option>
                  <option value='antananarivo'>Antananarivo</option>
                  <option value='antsiranana'>Antsiranana</option>
                  <option value='mahajanga'>Mahajanga</option>
                  <option value='fianarantsoa'>Mahajanga</option>
                  <option value='toamasina'>Toamasina</option>
                  <option value='toliara'>Toliara</option>
                </select>
              </div>
            </form>
            <div className='buttons mt-8 flex items-center justify-end gap-4'>
              <button className='bg-white px-8 py-2 rounded border text-red'>
                Annuler
              </button>
              <button
                className='bg-blackPurple px-6 py-2 rounded border text-white'
                onClick={applyFilterAndCloseModal}
              >
                Appliquer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Universities
