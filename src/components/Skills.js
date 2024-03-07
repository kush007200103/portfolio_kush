import React, { useState } from 'react'

const Skills = () => {
    const [technical, setTechnical] = useState(true);
    const technicalSkills = [
        {
            name: 'React',
            value: '80%'
        },
        {
            name: 'HTML/CSS',
            value: '90%'
        },
        {
            name: 'JavaScript',
            value: '85%'
        },
        {
            name: 'Node.Js',
            value: '75%'
        },
        {
            name: 'Data Structures',
            value: '95%'
        },
        {
            name: 'ROS2',
            value: '70%'
        }
        ,
        {
            name: 'Python',
            value: '60%'
        },
        {
            name: 'C++',
            value: '90%'
        },
        {
            name: 'Computer Vision',
            value: '40%'
        },
        {
            name: 'Rasberry pi',
            value: '60%'
        }
    ];


    const softSkills = [
        {
            name: 'Goal-Oriented',
            value: '80%'
        },
        {
            name: 'Collaboration',
            value: '90%'
        },
        {
            name: 'Positivity',
            value: '74%'
        },
        {
            name: 'Adaptability',
            value: '75%'
        },
        {
            name: 'Problem Solving',
            value: '95%'
        },
        {
            name: 'Empathy',
            value: '65%'
        },
        {
            name: 'Organization',
            value: '80%'
        },
        {
            name: 'Creativity',
            value: '78%'
        }
    ];


    return (
        <div id='skills' className='p-5 my-6 min-h-[60vh]'>
            <h1 className='text-4xl sm:text-6xl font-light text-center py-4'>Skills</h1>
            <div className='w-[80%] m-auto my-4 py-4'>
                <div className="flex justify-around py-4">
                    <div className={`${technical?"border-x-[1px] border-t-[1px] text-black":"text-blue-500 border-b-[1px]"} rounded-sm border-gray-300 w-[50%] hover:border-[1px] text-center p-2 cursor-pointer`} onClick={()=>{setTechnical(true)}}>
                        Technical Skills
                    </div>
                    <div className={`${technical===false?"border-x-[1px] border-t-[1px] text-black":"text-blue-500 border-b-[1px]"} rounded-sm border-gray-300 w-[50%] hover:border-[1px] text-center p-2 cursor-pointer`} onClick={()=>{setTechnical(false)}}>
                        Soft Skills
                    </div>
                </div>
                {technical? <div className='flex flex-wrap justify-between'>
                        {
                            technicalSkills.map((skill) => {
                                return <div className='m-2' key={skill.name}>
                                    <h4 className='font-light text-xl py-1'>{skill.name}</h4>
                                    <div className=" sm:w-[400px] bg-gray-100 rounded-md h-3.5 dark:bg-gray-300">
                                        <div className={`bg-blue-600 h-3.5 rounded-md`} style={{width:skill.value}}></div>
                                    </div>
                                </div>
                            })
                        }
                </div>
                :
                <div className='flex flex-wrap justify-between'>
                        {
                            softSkills.map((skill) => {
                                return <div className='m-2' key={skill.name}>
                                    <h4 className='font-light text-xl py-1'>{skill.name}</h4>
                                    <div class="sm:w-[400px] bg-gray-100 rounded-md h-3.5 dark:bg-gray-300">
                                        <div class={`bg-blue-600 h-3.5 rounded-md`} style={{width:skill.value}}></div>
                                    </div>
                                </div>
                            })
                        }
                </div>
                }
            </div>
        </div>
    )
}

export default Skills