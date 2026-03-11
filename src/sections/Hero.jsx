import React from 'react'
import {words} from '../constants/index.js'
import Button from '../components/Button.jsx'
import TextType from '../components/HeroModels/TextType.jsx'

const ASSET_BASE = import.meta.env.BASE_URL;
const asset = (p) => `${ASSET_BASE}${String(p).replace(/^\/+/, "")}`;

const Hero = () => {

  return (
    <section id="hero" className="relative overflow-hidden min-h-[60vh] md:min-h-[85vh]">

        <div className="relative z-10 flex flex-col items-center justify-center xl:mt-20 mt-16 gap-4 md:gap-10 px-4 md:px-20">
            <div className="flex flex-col gap-3 md:gap-7 w-full max-w-4xl">
                <div className='hero-text'>
                    <div className="hero-type-fixed">
                      <TextType
                        as="h1"
                        text={[
                          "Turning IDEAS into real projects that deliver results",
                          "Turning CONCEPTS into real projects that deliver results",
                          "Turning DESIGNS into real projects that deliver results",
                          "Turning CODE into real projects that deliver results",
                        ]}
                        typingSpeed={60}
                        deletingSpeed={40}
                        pauseDuration={5000}
                        loop
                        showCursor
                        cursorCharacter="|"
                        cursorClassName="text-[#9ad9f5]"
                        className="md:text-[50px] text-[26px] font-semibold leading-tight"
                      />
                    </div>
                </div>

                {/* glass intro card */}
                <div className="glass-card--static p-4 md:p-8 rounded-2xl w-full">
                  <p className='text-white-50 text-sm md:text-lg leading-relaxed'>
                    Hello! My name is{' '}
                    <span className="text-[#faf0ca] font-semibold">Rover Gutierrez</span>,
                    <br className="hidden md:block" />
                    a{' '}
                    <span className="text-[#aaffb8] font-medium">full-stack developer</span>
                    {' '}based in{' '}
                    <span className="inline-flex items-center gap-1">
                      <span
                        className="icon-mask size-3.5 md:size-4"
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
            </div>
        </div>

        {/* <AnimatedCounter/> */}
    </section>
  )
}

export default Hero
