"use client"
interface FilterModalProps {
  selectedType: string
  setSelectedType: (type: string) => void
  selectedProvince: string
  setSelectedProvince: (province: string) => void
  applyFilterAndCloseModal: () => void
}

const FilterModal = ({
  selectedType,
  setSelectedType,
  selectedProvince,
  setSelectedProvince,
  applyFilterAndCloseModal,
}: FilterModalProps) => {
  return (
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
            <label htmlFor='province' className='text-[15px] font-medium'>
              Par province :
            </label>
            <select
              name='province'
              id='province'
              className=' px-2 py-2 rounded border border-blackPurple/40 font-light'
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              <option value='all'>Tout</option>
              <option value='antananarivo'>Antananarivo</option>
              <option value='antsiranana'>Antsiranana</option>
              <option value='mahajanga'>Mahajanga</option>
              <option value='fianarantsoa'>Fianarantsoa</option>
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
  )
}

export default FilterModal
