import React from 'react'
import {words} from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx'

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

                {/* changed: wrapped intro text in a glass card with accent highlights */}
                <div className="glass-card--static p-5 md:p-6 rounded-2xl max-w-xl">
                  <p className='text-white-50 md:text-lg text-base leading-relaxed'>
                    Hello! My name is{' '}
                    <span className="text-[#faf0ca] font-semibold">Rover Gutierrez</span>,
                    <br />
                    a{' '}
                    <span className="text-[#aaffb8] font-medium">full-stack developer</span>
                    {' '}based in{' '}
                    <span className="inline-flex items-center gap-1">
                      <span
                        className="icon-mask size-4"
                        style={{
                          color: "#9ad9f5",
                          ["--icon-url"]: `url(${asset("images/pin.png")})`,
                        }}
                        aria-hidden="true"
                      />
                      <span className="text-[#9ad9f5] font-medium">Sacramento, CA</span>
                    </span>.
                    <br /><br />
                    I enjoy building{' '}
                    <span className="text-[#aaffb8] font-medium">web & mobile applications</span>
                    {' '}that matter.
                    <br />
                    If you're looking for someone hungry to learn and build —{' '}
                    <span className="text-[#faf0ca] font-semibold">let's connect</span>.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button className="md:w-80 md-16 w-60 h-12 mb-20" id="button" text="See my work" toId="work"/>
                  </div>
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
