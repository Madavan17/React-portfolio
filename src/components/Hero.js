import HeroImg from '../assets/hero.png';
import {  AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
    const config  = {
        subtitle: 'Im a MERN-stack developer and Designer',
        social: {
            instagram: 'https://www.instagram.com/iam_madhavan_/#',
            github: 'https://github.com/Madavan17',
            linkedin: 'https://www.linkedin.com/in/madhavan-sr-960712277/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Madhavan</span> 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.instagram} className='pr-5 hover:text-white'><FiInstagram size={40} /></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><FaGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
