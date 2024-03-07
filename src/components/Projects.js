import React from 'react'
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            title: 'QR Code ROS-Bot',
            description: 'a ros base bot which detect the qr to check which turn or what action it will take ',
            liveDemo: 'https://drive.google.com/drive/folders/1d5oUZ_3T0qYdVN3tJWNJAUdlH0yryjbO',
            github: 'https://github.com/kush0072001/Qr_Code_scan_Robot-ROS-',
            languages: {
                
                'Python':'100%'
            },
            technologies: ['Rasberrypi','ROS2','TensorFlow','OpenCv']
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
        {
            title: 'Artificial Intelligence Bot',
            description: 'A manuslly control bot  which detect the ojects which comes in front of them ',
            github: 'https://github.com/kush0072001/Ai_intelligent_ros_bot',
            liveDemo: 'https://drive.google.com/drive/folders/1rZoGACxzfikaQqQoZ8qbkrMWoWMHPUYz',
            languages: {
                
                'Python':'100%'
            },
            technologies: ['Rasberrypi','ROS2','TensorFlow']
        }
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