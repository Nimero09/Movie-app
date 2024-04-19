import React from 'react'

export const Input = ( {selectMovie}) => {
  return (
    <form className='w-72 '>
        <input onChange={(e) => selectMovie(e.target.value)} className='w-full py-2 pl-3 pr-10 border-2 border-gray-500' type="text" />
    </form>
  )
}