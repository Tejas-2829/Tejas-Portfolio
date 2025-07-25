import React from 'react'
import HTML from '../assets/html.webp'
import CSS from '../assets/css.webp'
import Js from '../assets/javascript.webp'
import Bootstrap from '../assets/bootstrap.webp'
import Chrome from '../assets/googlechrome.webp'
import Git from '../assets/git.webp'
import GitHub from '../assets/github.webp'
import VsCode from '../assets/vscode.webp'
import reactlogo from '../assets/React.png'
import Tailwind from '../assets/Tailwind.png'

function SkillsSection() {
  return (
    <div className='w-full lg:p-10 md:p-6' id='Skills'>
        <div className='bg-purple-100 p-6 rounded-xl'>
            <div className='text-center '>
                <h3 className='text-purple-800'>My Skills & Tools</h3>
                <h1 className='text-3xl font-bold m-3'>Expertise That Drives Innovation</h1>
                <p className='text-lg'>Leveraging cutting-edge tools to build high-performing, SEO-optimized websites with exceptional design and functionality.</p>
            </div>
            <div className='lg:flex hidden lg:mt-4 lg:p-6 justify-around'>
                <div className='bg-white md:p-5 md:px-10 rounded-lg shadow-xl xl:p-10 xl:px-16 text-center hover:border hover:border-purple-500'>
                    <div className='mb-2'><img src={HTML} alt=""/></div>
                    <div><p className='font-bold'>HTML</p></div>
                </div>
                <div className='bg-white md:p-5 md:px-10 rounded-lg shadow-xl xl:p-10 xl:px-16 text-center hover:border hover:border-purple-500'>
                    <div className='mb-2'><img src={CSS} alt=""/></div>
                    <div><p className='font-bold'>CSS</p></div>
                </div>
                <div className='bg-white lg:flex lg:flex-col justify-center items-center md:p-5 md:px-10 rounded-lg shadow-xl xl:p-10 xl:px-13 text-center hover:border hover:border-purple-500'>
                    <div className='lg:mb-2'><img src={Js} alt=""/></div>
                    <div><p className='font-bold'>Javascript</p></div>
                </div>
                <div className='bg-white lg:flex lg:flex-col justify-center items-center md:p-5 md:px-7  rounded-lg shadow-xl xl:p-10 xl:px-13 text-center hover:border hover:border-purple-500'>
                    <div className='lg:mb-2 lg:w-16'><img src={Bootstrap} alt=""/></div>
                    <div><p className='font-bold'>BootStrap</p></div>
                </div>
                <div className='bg-white md:p-5 md:px-5 rounded-lg shadow-xl xl:p-10 xl:px-13 text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 lg:pl-4 lg:w-20 lg:pt-2'><img src={Tailwind} alt=""/></div>
                    <div><p className='font-bold'>Tailwind CSS</p></div>
                </div>
            </div>
            <div className='lg:flex hidden mt-4 p-6 justify-around'>
                <div className='bg-white md:p-5 md:px-7 rounded-lg shadow-xl xl:p-10 xl:px-13 text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 lg:w-20'><img src={reactlogo} alt=""/></div>
                    <div><p className='font-bold'>React</p></div>
                </div>
                <div className='bg-white md:p-5 md:px-10 rounded-lg shadow-xl xl:p-10 xl:px-16 text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-15'><img src={Chrome} alt=""/></div>
                    <div><p className='font-bold'>Chrome</p></div>
                </div>
                <div className='bg-white md:p-5 md:px-10 rounded-lg shadow-xl xl:p-10 xl:px-16 text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-15'><img src={Git} alt=""/></div>
                    <div><p className='font-bold'>Git</p></div>
                </div>
                <div className='bg-white md:p-5 md:px-10 rounded-lg shadow-xl xl:p-10 xl:px-16 text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-15'><img src={GitHub} alt=""/></div>
                    <div><p className='font-bold'>GitHub</p></div>
                </div>
                <div className='bg-white md:p-5 md:px-10 rounded-lg shadow-xl xl:p-10 xl:px-16 text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-15'><img src={VsCode} alt=""/></div>
                    <div><p className='font-bold'>VS Code</p></div>
                </div>
            </div>

            <div className='flex mt-6 mb-4 lg:hidden'>
                 <div className='bg-white mr-6 flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='mb-2'><img src={HTML} alt=""/></div>
                    <div><p className='font-bold'>HTML</p></div>
                </div>
                <div className='bg-white flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='mb-2'><img src={CSS} alt=""/></div>
                    <div><p className='font-bold'>CSS</p></div>
                </div>
            </div>
            <div className='flex mb-4 lg:hidden'>
                 <div className='bg-white mr-6 flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-20 pl-2'><img src={Js} alt=""/></div>
                    <div><p className='font-bold'>Javascript</p></div>
                </div>
                <div className='bg-white flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-15'><img src={Bootstrap} alt=""/></div>
                    <div><p className='font-bold'>Bootstrap</p></div>
                </div>
            </div>
            <div className='flex mb-4 lg:hidden'>
                 <div className='bg-white mr-6 flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 md:w-30 md:mb-2 w-25'><img src={reactlogo} alt=""/></div>
                    <div><p className='font-bold'>React</p></div>
                </div>
                <div className='bg-white flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='md:w-15 md:mb-4 mb-6 pt-4 w-15'><img src={Tailwind} alt=""/></div>
                    <div><p className='font-bold'>Tailwind CSS</p></div>
                </div>
            </div>
            <div className='flex mb-4 lg:hidden'>
                 <div className='bg-white mr-6 flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-15'><img src={Chrome} alt=""/></div>
                    <div><p className='font-bold'>Chorme</p></div>
                </div>
                <div className='bg-white flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-15'><img src={Git} alt=""/></div>
                    <div><p className='font-bold'>Git</p></div>
                </div>
            </div>
            <div className='flex lg:hidden'>
                 <div className='bg-white mr-6 flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-15'><img src={GitHub} alt=""/></div>
                    <div><p className='font-bold'>GitHub</p></div>
                </div>
                <div className='bg-white flex flex-col justify-center p-6 items-center w-2/4 rounded-lg shadow-xl text-center hover:border hover:border-purple-500'>
                    <div className='mb-2 w-15'><img src={VsCode} alt=""/></div>
                    <div><p className='font-bold'>VS Code</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsSection