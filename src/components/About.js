import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-100 flex md:flex-row flex-col justify-evenly p-5' id="about">
        <div className='md:w-[35%] p-5'>
        <img src="./assets/prof1.jpg" alt="mypic" className=' rounded-full ' />
        </div>
        <div className='text-center md:w-[55%] space-y-5 flex flex-col justify-center items-center'>
            <h2 className='sm:text-6xl text-4xl font-light'>About Me</h2>
            <><p className='text-xl font-light w-[80%] py-5'>I'm a final year Bachelor of Technology student at IIIT Jabalpur, passionate about software development and robotics. Proficient in React.js, Next.js, Node.js, and MongoDB for web development, with a strong background in data structures and algorithms (LeetCode Knight badge, 4-star CodeChef rating). I've solved 1500+ coding problems and participated in various online contests. Additionally, I have hands-on experience with Raspberry Pi, ROS2, TensorFlow Lite, OpenCV, and navigation stack on ROS for TurtleBot3. Always eager to learn and grow as a developer</p><a href='https://drive.google.com/drive/folders/1yhoimvLEfspEPPeIf_gAB7-Z0FXexshm' target='__blank' className='bg-none px-3 py-2 border-[1px] border-black hover:bg-black hover:border-white w-fit hover:text-white rounded-md text-xl my-5'>Resume</a></>
        </div>
    </div>
  )
}

export default About
