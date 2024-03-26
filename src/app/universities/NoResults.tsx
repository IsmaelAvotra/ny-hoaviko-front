import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NoResults = () => {
  return (
    <div className=' px-2 min-h-screen flex items-center justify-center'>
      <div className='bg-white/70 min-h-80 flex flex-col items-center justify-center text-center px-4 py-4 text-black rounded-md w-full'>
        <Image
          src={'/no-results.png'}
          alt={'icon for no results search'}
          width={128}
          height={128}
          className='w-16 h-16 mb-4'
        />
        <h2 className='text-lg font-semibold mb-4 text-blackPurple'>
          Pas de resultats trouvés
        </h2>
        <p className='text-sm mb-6'>
          Votre recherche n'a retourné aucun résultat correspondant à vos
          critères.
        </p>
        <Link
          href={'/universities'}
          className='bg-black text-white px-12 py-2 rounded'
        >
          Retour
        </Link>
      </div>
    </div>
  )
}

export default NoResults
