import React from 'react'

export const Input = ( {selectMovie}) => {
  return (
    <form onSubmit={e => e.preventDefault()} className='w-72'>
        <input onChange={(e) => selectMovie(e.target.value)} className='h-9 border-none focus:outline-none rounded-lg  w-full text-black py-2 pl-3 pr-10 border-2 border-gray-500' type="text" />
    </form>
  )
}