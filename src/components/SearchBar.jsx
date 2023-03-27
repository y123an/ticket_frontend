import React from 'react'

export default function SearchBar() {
  return (
    <div className='search-bar flex justify-end mr-[10%] '>
        <form action="/book" className='flex items-center gap-4'>
            <input type="search"  className='bg-[#D5D5D5] max-md:w-[200px]  max-md:h-[20px] w-[270px] h-[55px] p-5 text-xl max-md:text-sm rounded-lg' placeholder='Search'/>
            <button type='submit'>
                <img src="images/search.svg" alt="search"  className='h-7 w-7'/>
            </button>
        </form>
    </div>
  )
}
