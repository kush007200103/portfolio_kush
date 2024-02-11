import React from 'react'
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            title: 'TELINSTA',
            description: 'Social Media app (user interface inspired from instagram) for posting images, chatting which has authentication contains OTP verification.',
            liveDemo: 'https://telinsta.onrender.com/',
            github: 'https://github.com/kush007200103/Telinsta-master',
            languages: {
                'JavaScript': '99.6%',
                'CSS': '0.4%'
            },
            technologies: ['Next.js', 'Node.js']
        },
        {
            title: 'Vender',
            description: 'An e-commerce store  where users can add items to the cart and order them at exciting prices with great discounts (currently only for vegetables and fruits).',
            liveDemo: 'https://vender-ecommerce.vercel.app/',
            github: 'https://github.com/kush007200103/vender-ecommerce',
            languages: {
                'JavaScript': '76.9%',
                'CSS': '20%',
                'Other': '1.1%'
            },
            technologies: ['React.js', 'Node.js']
        },
        {
            title: 'Fitness-Freaky',
            description: 'Engineered a dynamic website featuring an extensive array of 1000+ exercises, seamlessly fetched through API calls for enhanced user engagement',
            liveDemo: 'https://fitness-freaky.netlify.app/',
            github: 'https://github.com/kush007200103/fitness_freaky',
            languages: {
                'JavaScript': '80%',
                'CSS': '12%',
                'Other': '0.7%'
            },
            technologies: ['React.js','Node.js']
        },
        // {
        //     title: 'Doctor_appointment',
        //     description: 'An app for competitive programmers to get all contests details at one place with awesome online IDE supported by python,c/cpp and more languages.',
        //     liveDemo: 'https://dcode-contests.netlify.app/',
        //     github: 'https://github.com/PrashantS360/DCode',
        //     languages: {
        //         'JavaScript': '97.0%',
        //         'HTML': '2.6%',
        //         'CSS': '0.4%'
        //     },
        //     technologies: ['React.js']
        // }
    ];

    return (
        <div id='projects' className='my-8 bg-gray-50 py-8 flex flex-col justify-center items-center'>
            <h1 className='text-4xl sm:text-6xl font-light'>Recent Projects</h1>
            <div className="projects flex flex-wrap justify-evenly my-4">
                {
                    projects.map((project) => {
                        return <Project key={project.title} project={project} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects