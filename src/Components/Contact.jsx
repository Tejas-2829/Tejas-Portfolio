import React from 'react'


function Contact() {
  return (
    <div className='w-full lg:p-10 md:p-6' id='Contact'>
        <div className='md:flex bg-purple-100 p-6 rounded-xl'>
            <div className='md:w-2/4 pt-8 pr-4 md:mb-0 mb-8'>
                <h3 className='font-bold font-Gill Sans mb-3'>Contact Me</h3>
                <h1 className='text-3xl font-bold font-Gill Sans mb-3'>Let’s Connect & Collaborate</h1>
                <p className='mb-10'>Have a project in mind or need a stunning website? 
                Feel free to reach out, and let's create something amazing together!</p>

                <h3 className='font-bold'>Mobile:</h3>
                <a href="tel:+918956589464"><p className='hover:cursor-pointer hover:text-purple-600'><span><i class="fa-solid fa-phone"></i></span> +91 8956589464</p></a>
                <h3 className='font-bold'>Email:</h3>
                <a href="mailto:tejasnaik2910@gmail.com"><p className='hover:cursor-pointer hover:text-purple-600'><span className='mr-1'><i class="fa-solid fa-envelope"></i></span>tejasnaik2910@gmail.com</p></a>
                <h3 className='font-bold'>Location:</h3>
                <a href="https://www.google.com/maps/place/Arihant+City+Phase+2/@19.2797271,73.0784655,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7bd85cfee6c6d:0xbaa24ec09abc44d5!8m2!3d19.2797221!4d73.0810404!16s%2Fg%2F11cn39x82_?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D" target='_blank'><p className='hover:cursor-pointer hover:text-purple-600'><span><i class="fa-solid fa-location-crosshairs"></i></span>Thane West, Mumbai- 421302</p></a>

            </div>


            <div className='md:w-2/4 bg-purple-200 p-10 rounded-2xl'>
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="04e4cb62-b4aa-4815-9c09-8bee9e132076"></input>
                    <input type="text" name='name' placeholder='Enter Your Name' className='bg-white w-full p-3 rounded-2xl' required/>
                    <input type="email" name='email' placeholder='Enter Your Email' className='bg-white w-full p-3 rounded-2xl my-6' required/>
                    <input type="number" name='phone' placeholder='Enter Your Phone' className='bg-white w-full p-3 rounded-2xl mb-6' required minLength={10} maxLength={10}/>
                    <textarea cols={4} rows={5} name='message' className='bg-white w-full p-3 rounded-2xl' placeholder='Message'></textarea>
                    <button className='bg-gradient-to-tr from-violet-950 via-violet-900 to-violet-600 mt-4 ml-1 p-3 px-8 rounded-lg text-white lg:text-slate-200 hover:cursor-pointer lg:hover:text-white'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact