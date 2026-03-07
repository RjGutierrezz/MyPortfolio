import React from 'react'
import {words} from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx'
import Grainient from '../components/HeroModels/Grainient.jsx'


const ASSET_BASE = import.meta.env.BASE_URL;
const asset = (p) => `${ASSET_BASE}${String(p).replace(/^\/+/, "")}`;

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
    // ensure the section is tall enough and establishes a predictable stacking context
    <section id="hero" className="relative overflow-hidden min-h-[85vh]">
        {/* keep background at z-0 (not negative), and pin it */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <Grainient
            color1="#0e2a45"
            color2="#095195"
            color3="#daf5fa"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        {/* ensure all hero content is above the background */}
        <div className="relative z-10 hero-layout">
            <header className="order-1 md:order-1 flex flex-col justify-center md:w-full w-screen md:px-20 px-5 pt-10 md:pt-16">
                <div className="flex flex-col gap-7">
                    <div className='hero-text'>
                        <h1>Turning
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word, idx) => (
                                        <span key={`${word.text}-${idx}`} className = "flex items-center md:gap-3 gap-1 pb-2">
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
                <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                  Hello! My name is Rover Gutierrez,<br /> a full stack developer based in Sacramento CA. <br />
                  I'm a full-stack developer who enjoys building web <br /> and mobile applications that matter. <br />
                  If you're looking for someone hungry to learn and build — let's connect.
                </p>
                <Button className="md:w-80 md-16 w-60 h-12 mb-20" id="button" text="See my work" toId="work"/>
                </div>

            </header>
            <figure className="order-2 md:order-2">
                <div className="hero-3d-layout">
                    <HeroExperience/>
                </div>
            </figure>
        </div>

        {/* <AnimatedCounter/> */}
    </section>
  )
}

export default Hero
