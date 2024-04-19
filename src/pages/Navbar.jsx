import React from 'react'
import github from '../assets/img/github.png'
import movie from '../assets/img/movie.png'

export const Navbar = () => {
  return (
    <header className='flex justify-between max-w-[90%] mx-auto py-5'>
        <img className='w-12' src={movie} alt="" />
        <a href="https://github.com/Nimero09" target='_blank' rel="noreferrer"><img className='w-12' src={github} alt="" /></a>
    </header>
  )
}
