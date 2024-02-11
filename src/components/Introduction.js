import React,{useState,useEffect} from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import '../App.css'

const Introduction = () => {
    const text = "Passionate about changing the world with technology.";
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, 50);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <div className='background p-8 min-h-screen flex flex-col justify-center items-center' id='introduction'>
            <h1 className='text-5xl sm:text-[5rem] mt-5 text-white'>Kaushal bhargava</h1>
            <p className='text-white text-xl font-light mb-5 py-2'>{currentText}</p>

            <div className='flex space-x-3 my-10'>
                <a href="https://github.com/kush007200103" target='__blank'>
                    <FaGithub size={50} className='text-white hover:text-black' />
                </a>
                <a href="https://leetcode.com/ben03tenison/">
                    <SiLeetcode size={50} className='text-white hover:text-black' />
                </a>
                <a href="https://www.instagram.com/kushbhargava007/">
                    <FaInstagram size={50} className='text-white hover:text-black' />
                </a>
                <a href="https://www.linkedin.com/in/kaushal-bhargava-1b11ab215/">
                    <FaLinkedin size={50} className='text-white hover:text-black' />
                </a>
            </div>
            <a href='#about' className='bg-none px-3 py-2 border-[1px] border-white hover:bg-white hover:text-black hover:border-black text-white rounded-md text-xl'>More about me</a>
        </div>
    )
}

export default Introduction