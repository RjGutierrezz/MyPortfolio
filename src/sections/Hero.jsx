import React from 'react'
import {words} from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx'


const Hero = () => {
    useGSAP (() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity:0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 3,
                ease: 'power2.inOut'
            },
        )
    })


  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background"/>
        </div>

        <div className="hero-layout">
            {}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className='hero-text'>
                        <h1>Creating
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className = "flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}

                                </span>
                            </span>
                        </h1>
                        <h1>Into Real Projects</h1>
                        <h1>That Deliver Results</h1>
                    </div>
                <p className='text-white-50 md:text-xl relative z-10 pointer-events-none mt-20'>
                Hello! My name is Rover Gutierrez, a developer based in Sacramento CA. I'm a full-stack developer who enjoys building web and mobile applications and turning ideas into real projects. I love learning new technologies by actually using them and figuring things out as I go, whether that’s working on the front end, the backend, or somewhere in between.
                What I enjoy most about development is the mix of creativity and problem-solving, and seeing something come together from start to finish. When I’m not working on my computer, I usually spend my time playing video games, staying active, or reading manga.
                </p>
                <Button className="md:w-80 md-16 w-60 h-12" id="button" text="See my work"/>
                </div>

            </header>
            { /* Right: 3D MODEL*/}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience/>
                </div>
            </figure>
        </div>

        <AnimatedCounter/>
    </section>
  )
}

export default Hero