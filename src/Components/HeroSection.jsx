import React from 'react'
import heroimage from '../assets/heroimage.png'

function HeroSection() {
    return (
        <div className='w-full md:flex pt-25 md:h-screen' id='HeroSection'>
            <div className='md:w-2/4 flex justify-center pt-10'><img src={heroimage} alt="" /></div>
            <div className='md:w-2/4 text-center flex flex-col justify-center p-6 lg:pr-20 pt-20'>
                <h1 className='text-4xl font'>Tejas Naik</h1>
                <h1 className='text-xl text-purple-800 m-3 '>Web Devloper</h1>
                <p>Hello! I'm Tejas Naik, a creative web designer building visually appealing, SEO-friendly, and user-centric websites. 
                I specialize in frontend design, website optimization and Canva-based branding to help businesses enhance their online presence.</p>
               <div className='mt-4'> 
                <button className='bg-gradient-to-tr from-violet-950 via-violet-900 to-violet-600 p-2 md:text-slate-300 text-white hover:text-white rounded '>Download CV</button> 
               </div>
            </div>
        </div>
    )
}

export default HeroSection