import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const navbar = document.getElementById('navbar')
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(234,236,239,.81)';
            } else {
                navbar.style.background = 'none';
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <nav className={`fixed top-0 z-10 w-full p-2`} id='navbar'>
            <div className="flex p-3">
                <h2 className='mx-4 text-xl'>{"<KB/>"}</h2>
                <ul className='space-x-6 text-lg sm:flex hidden'>
                    <li className='font-light'><a href='#projects'>Projects</a></li>
                    <li className='font-light'><a target='__blank' href='https://drive.google.com/drive/folders/1yhoimvLEfspEPPeIf_gAB7-Z0FXexshm'>Resume</a></li>
                    <li className='font-light'><a href='#about'>About</a></li>
                    <li className='font-light'><a href='#skills'>Skills</a></li>
                </ul>

            </div>
            <div className='space-y-2 fixed top-3.5 right-2 sm:hidden' onClick={() => { setShowNavbar(!showNavbar) }}>
                <div className='h-0.5 w-7 bg-black'></div>
                <div className='h-0.5 w-7 bg-black'></div>
                <div className='h-0.5 w-7 bg-black'></div>
            </div>

            {showNavbar && <div className="bg-white p-4">
                <ul className='text-lg flex flex-col space-y-5'>
                    <li className='font-light px-9'><a href='#projects'>Projects</a></li>
                    <li className='font-light px-9'><a target='__blank' href='https://drive.google.com/drive/folders/1yhoimvLEfspEPPeIf_gAB7-Z0FXexshm'>Resume</a></li>
                    <li className='font-light px-9'><a href='#about'>About</a></li>
                    <li className='font-light px-9'><a href='#skills'>Skills</a></li>
                </ul>
            </div>}
        </nav>
    )
}

export default Navbar
