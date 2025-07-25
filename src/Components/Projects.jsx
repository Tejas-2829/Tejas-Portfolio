import React from 'react'
import Bootstrap from '../assets/MyPortfolio.png'

function Projects() {
  return (
    <div className='p-6'>
        <div className='text-center px-10 mb-5' id='Projects'>
            <h3 className='text-purple-800'>Work</h3>
            <h1 className='text-3xl font-bold m-3'>Showcasing Innovation & Creativity</h1>
            <p className='text-lg'>A collection of my best web design and development projects, 
            crafted with modern technologies for seamless performance, aesthetics, and SEO optimization.</p>
        </div>
        <div className='md:flex md:gap-6 w-full p-2 cursor-pointer '>
            <div className='md:w-2/4 flex flex-col text-center p-2 shadow-xl md:mb-0 mb-4'> <a href="https://github.com/Tejas-2829" target="_blank" rel="noopener noreferrer">
                <img src={Bootstrap} alt="" className='w-fit rounded hover:scale-99 ease-initial'/>
                <h1 className='mt-2 text-2xl font-bold hover:text-purple-800'>Bootstrap</h1>
            </a></div>
            <div className='md:w-2/4 flex flex-col text-center p-2 shadow-xl'> <a href="https://github.com/Tejas-2829" target="_blank" rel="noopener noreferrer">
                <img src={Bootstrap} alt="" className='w-fit rounded hover:scale-99 ease-initial'/>
                <h1 className='mt-2 text-2xl font-bold hover:text-purple-800'>Bootstrap</h1>
            </a></div>
        </div>
    </div>
  )
}

export default Projects