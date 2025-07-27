import React from 'react'
import { useState } from 'react';
import Logo from '../assets/LogoT.png'
import Tejas from '../assets/TejasLogo.png'
import { Menu, X } from 'lucide-react';


export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
  
  return (
  <>
  <nav class="flex z-20 fixed w-full justify-between bg-gradient-to-r from-purple-950 via-purple-800 to-purple-600 items-center">
  <div className=' flex md:w-40 w-35 justify-around items-center md:ml-16'>
    <div className='w-15 '><img src={Logo} alt="" className=''/></div>
    <div className='w-20'><img src={Tejas} alt="" /></div>
  </div>
  <ul className="lg:flex hidden text-slate-300 cursor-pointer">
    <li className="mx-3 hover:text-white"><a href="https://tejas-2829.github.io/Tejas-Portfolio/">Home</a></li>
    <li className="mx-3 hover:text-white"><a href="#HeroSection">About Us</a></li>
    <li className="mx-3 hover:text-white"><a href="#Skills">Skills</a></li>
    <li className="mx-3 hover:text-white"><a href="#Projects">Project</a></li>
    <li className="mx-3 hover:text-white"><a href="#Contact">Contact Us</a></li>
  </ul>
  <button className='lg:block mr-10 hidden bg-gradient-to-tr from-violet-950 via-violet-900 to-violet-600 p-2 md:text-slate-300 text-white hover:text-white rounded-lg '>Contact Here</button> 
  {/* <div className="lg:hidden text-3xl cursor-pointer mr-8 md:text-slate-300 md:hover:text-white text-white" onClick={() => {
    const dropdown = document.getElementById('Dropdown');
    if (dropdown) {
      dropdown.style.display = dropdown.style.display === 'none' ? 'none' : 'block';
    }
  }}>&#8801;</div> */}

  <div className="lg:hidden md:flex flex-col justify-end pr-8 text-white">
    <button onClick={toggleNavbar}>
      {mobileDrawerOpen ? <X /> : <Menu />}
    </button>
  </div>

  {mobileDrawerOpen && (
  <div className="lg:hidden fixed right-0 top-20 z-10 bg-gradient-to-tr from-purple-950 via-purple-800 to-purple-600 w-full p-4 flex flex-col justify-center items-center text-white">
    <ul>
      <li className="py-4"><a href="https://tejas-2829.github.io/Tejas-Portfolio/">Home</a></li>
      <li className="py-4"><a href="#HeroSection">About Us</a></li>
      <li className="py-4"><a href="#Skills">Skills</a></li>
      <li className="py-4"><a href="#Projects">Project</a></li>
      <li className="py-4"><a href="#Contact">Contact Us</a></li>
    </ul>
  </div>
  )}

</nav>

 {/* <div className='lg:hidden w-full text-slate-200 pt-20 text-center bg-purple-950' id='Dropdown'>
    <h1 className='pt-4'><a href="/">Home</a></h1>
    <h1 className='my-4'><a href="#HeroSection">About</a></h1>
    <h1 className='my-4'><a href="#Skills">Skills</a></h1>
    <h1 className='my-4'><a href="#Projects">Projects</a></h1>
    <h1 className='pb-4'><a href="#Contact">Contact</a></h1>
  </div> */}
</>
  )
}

