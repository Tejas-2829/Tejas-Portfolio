import React from 'react'
import Logo from '../assets/LogoT.png'
import TejasLogo from '../assets/TejasLogo.png'

function Footer() {
  return (
    <>
    <div className='w-full lg:flex p-10 bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 text-slate-200 items-center'>
        <div className='w-full lg:w-2/4 xl:ml-8 mb-8'>
            <div className='flex'>
                <div className='flex w-15'>
                    <img src={Logo} alt="" className='w-fit' />
                </div>
                <div className='w-20'>
                    <img src={TejasLogo} alt="" className='w-fit' />
                </div>
            </div>
            <p className='text-white w-full'>"Designing and developing modern, 
            SEO-friendly websites with a focus on user experience, performance, 
            and aesthetics. Let’s build something great together!"</p>
        </div>
        <div className='md:w-2/4 xl:ml-20 lg:ml-14 xl:pb-8 lg:pb-12 lg:pt-6 xl:text-left my-6 '>
            <h1 className='text-2xl font-bold font-serif lg:mb-7 text-white mb-2'>Quick Links</h1>
            <p><span className='hover:text-white hover:cursor-pointer '>About Us</span></p>
            <p> <span className='hover:text-white hover:cursor-pointer'>Skills</span></p>
            <p> <span className='hover:text-white hover:cursor-pointer'>Projects</span></p>
            <p> <span className='hover:text-white hover:cursor-pointer'>Contact</span></p>
        </div>
        <div className='md:w-2/4 xl:mr-20 xl:pb-8 lg:mr-9 my-6'>
            <h1 className='text-2xl font-bold font-serif xl:mb-6 xl:pt-5 lg:mb-8 text-white'>Contact Info</h1>
            <p className='hover:text-white hover:cursor-pointer'><a href="tel:+918956589464"><span><i class="fa-solid fa-phone"></i></span> +91 8956589464</a></p>
            <p className='my-2 hover:text-white hover:cursor-pointer'><a href="mailto:tejasnaik2910@gmail.com"><span className='mr-1'><i class="fa-solid fa-envelope"></i></span>tejasnaik2910@gmail.com</a></p>
            <a href="https://www.google.com/maps/place/Arihant+City+Phase+2/@19.2797271,73.0784655,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bd85cfee6c6d:0xbaa24ec09abc44d5!8m2!3d19.2797221!4d73.0810404!16s%2Fg%2F11cn39x82_?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D" target='_blank'><p className='hover:cursor-pointer hover:text-white'><span><i class="fa-solid fa-location-crosshairs"></i></span>Thane West, Mumbai- 421302</p></a>

        </div>
        <div className='md:w-2/4 pb-4 '>
            <h1 className='text-2xl font-bold font-serif xl:mb-6 xl:pt-5 lg:mb-8 text-white'>Socail Links</h1>
            <p><a href="https://www.linkedin.com/in/tejas-naik-021702216/" target='_blank'> <span className='hover:text-white hover:cursor-pointer'><span><i class="fa-brands fa-linkedin"></i></span> Linkedin</span></a></p>
            <p><a href="https://github.com/Tejas-2829" target='_blank'> <span className='hover:text-white hover:cursor-pointer'><span><i class="fa-brands fa-github"></i></span> Github</span></a></p>
            <p><a href="https://wa.me/+918956589464" target='_blank'> <span className='hover:text-white hover:cursor-pointer'><span><i class="fa-brands fa-whatsapp"></i></span> Whatsapp</span></a></p>
            <p><a href="tel:+918956589464" target='_blank'> <span className='hover:text-white hover:cursor-pointer'><span><i class="fa-solid fa-phone"></i></span> Phone</span></a></p>
        </div>      
    </div>

    <div className='p-4 text-center text-white bg-gradient-to-r from-purple-600 via-purple-800 to-purple-950'>
        <h1>&copy; 2025 Tejas Naik. All Rights Reserved.</h1>
    </div>
    </>
  )
}

export default Footer