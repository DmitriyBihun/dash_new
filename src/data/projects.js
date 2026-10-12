import engProj from '../assets/projects/engProj.avif'
import cryptoProj from '../assets/projects/cryptoProj.avif'
import blogProj from '../assets/projects/blogProj.avif'
import mpmProj from '../assets/projects/mpmProj.avif'
import herewasProj from '../assets/projects/herewasProj.avif'

const projects = [
    {
        id: 1,
        title: 'English Grammar Quiz',
        description: 'An application for testing your knowledge of English grammar. Graphical display of the history of passing and explanation of mistakes made.',
        stack: ['Redux', 'Firebase', 'Recharts', 'Tailwind'],
        link: 'https://english-gqp.netlify.app/',
        image: engProj,
    },
    {
        id: 2,
        title: 'Сryptotrade',
        description: 'This is an ideal environment for beginners and those who want to hone their skills before entering the real market.',
        stack: ['Tailwind', 'Redux', 'Firebase', 'i18next', 'recharts'],
        link: 'https://cryptotrade-2.netlify.app/',
        image: cryptoProj,
    },
    {
        id: 3,
        title: 'MusicPlaylistMaker',
        description: 'An application that allows you to create your own playlists and share them with friends.',
        stack: ['Vite', 'Redux', 'Firebase', 'deezer'],
        link: 'https://mpm-v2.netlify.app/',
        image: mpmProj,
    },
    {
        id: 4,
        title: 'Travel Blog',
        description: 'Travel stories shared by people around the world. Connect with travelers, exchange impressions, and explore together. Your next destination starts here.',
        stack: ['Unsplash', 'Redux', 'Firebase', 'Lenis', 'MUI'],
        link: 'https://modern-travel-blog.netlify.app/',
        image: blogProj,
    },
    {
        id: 5,
        title: 'hereWas',
        description: 'A website that tells about the different places a person has visited and gives you guides to explore.',
        stack: ['Vite', 'Redux', 'Firebase', 'lenis', 'gsap'],
        link: 'https://herewas.me/',
        image: herewasProj,
    },
];

export default projects