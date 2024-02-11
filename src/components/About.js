import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-100 flex md:flex-row flex-col justify-evenly p-5' id="about">
        <div className='md:w-[35%] p-5'>
        <img src="./assets/prof1.jpg" alt="mypic" className=' rounded-full ' />
        </div>
        <div className='text-center md:w-[55%] space-y-5 flex flex-col justify-center items-center'>
            <h2 className='sm:text-6xl text-4xl font-light'>About Me</h2>
            <p className='text-xl font-light w-[80%] py-5'>My name is Kaushal Bhargava. I'm a final year student from IIIT Jabalpur pursuing my B.Tech degree . I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. I'm also a sport enthust so in my free time i play chess and badminton.</p>

            <a href='https://drive.google.com/drive/folders/1yhoimvLEfspEPPeIf_gAB7-Z0FXexshm' target='__blank' className='bg-none px-3 py-2 border-[1px] border-black hover:bg-black hover:border-white w-fit hover:text-white rounded-md text-xl my-5'>Resume</a>
        </div>
    </div>
  )
}

export default About
