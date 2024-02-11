import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import "react-awesome-slider/dist/styles.css";

const Achievements = () => {
    const media = [
        {
            source: "./assets/leetcode.png"
        },
        {
            source: "./assets/cc.png"
        },
        {
            source: "./assets/gfg.png"
        },
        // {
        //     source: "./assets/medusa.png"
        // }
    ]

    return (
        <div id='achievements' className='my-6 p-6'>
            <h2 className='text-4xl sm:text-6xl text-center font-light my-4'>Achievements</h2>
            <div className="flex flex-col md:flex-row my-8 m-auto md:w-[90%]">
                <div className='md:w-[40%] flex items-center justify-evenly'>
                    <ul className='list-disc text-lg md:text-xl'>
                        <li className='font-light md:py-5 py-2'>Knight(600+ problems) on LeetCode</li>
                        <li className='font-light md:py-5 py-2'>Hightest Rating on codechief is 1832</li>
                        <li className='font-light md:py-5 py-2'>600+ solve in GFG</li>
                        <li className='font-light md:py-5 py-2'>Secure 3rd possiton in Chess Colligated League(20+countries participated)</li>
                    </ul>
                </div>
                <div className='md:w-[55%] rounded-sm'>
                <AwesomeSlider infinite={true} media={media}></AwesomeSlider>
                </div>
            </div>
        </div>
    )
}

export default Achievements