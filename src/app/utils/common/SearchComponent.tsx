'use client'

import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void
}

function useDebounceValue(value: string, time = 250) {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value)
    }, time)
    return () => {
      clearTimeout(timeout)
    }
  }, [value, time])
  return debounceValue
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const debounceSearchTerm = useDebounceValue(searchTerm)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchTerm(value)
  }

  const handleSearch = () => {
    if (debounceSearchTerm.length > 0) {
      onSearch(debounceSearchTerm)
    }
  }

  useEffect(() => {
    if (debounceSearchTerm === '') {
      onSearch('')
    }
  }, [debounceSearchTerm, onSearch])

  useEffect(() => {
    const input = inputRef.current
    if (input) {
      input.addEventListener('click', handleSearch)
      return () => input.removeEventListener('click', handleSearch)
    }
  }, [handleSearch])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className='bg-white flex items-center px-2 rounded w-full mx-auto'>
      <input
        type='search'
        ref={inputRef}
        className='bg-white text-black text-sm rounded outline-none block w-full p-2.5 xl:py-3 relative'
        placeholder='Chercher une université ...'
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div
        className='inset-y-0 right-0 px-2 py-1 flex items-center justify-center'
        onClick={handleSearch}
      >
        <SearchIcon className='text-blackPurple/60' />
      </div>
    </div>
  )
}

export default SearchComponent
