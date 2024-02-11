import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import '../App.css'

const Project = ({project}) => {
    const { title, description, github, liveDemo, languages,technologies } = project;

    return (
        <div className='border-[1px] border-gray-200 rounded-md sm:w-[400px] w-[280px] md:w-[500px] p-5 shadow-lg m-3 cursor-pointer card'>
            <h3 className='font-bold'>{title}</h3>
            <p>{description}</p>
            <div className="flex text-black mb-5">
                <a className='text-gray-500 border-[1px] border-gray-400 px-4 py-1 rounded-md m-2 flex items-center space-x-2' href={liveDemo} target='__blank'><MdOutlineLiveTv/>
                <span>Live Demo</span></a>
                <a className='text-gray-500 border-[1px] border-gray-400 px-4 py-1 rounded-md m-2 flex items-center space-x-2' href={github} target='__blank'><FaGithub/> <span>Github</span></a>
            </div>
            <hr />
            <p className='flex items-center my-2 mt-5'>Languages :
                {
                    Object.keys(languages).map((language) => {
                        return <span key={language} className='bg-gray-200 px-1 py-0.5 m-1 font-bold text-[0.75rem]  rounded-md'>{language}: {languages[language]}</span>
                    })
                }
            </p>
            <p className='flex items-center'>Technologies :
                {
                    technologies.map((technology) => {
                        return <span key={technology} className='bg-gray-200 px-1 py-0.5 m-1 font-bold text-[0.75rem]  rounded-md'>{technology}</span>
                    })
                }
            </p>


        </div>
    )
}

export default Project