import React from 'react'

const Hero = () => {
  return (
    <div className='mx-10 md:mx-32 pb-12'>
        <div className='text-[#F50057] font-Balsamiq text-2xl'>Hi, my name is Fu Fei. 👋</div>
        <div className='font-Inter font-bold text-5xl py-4'>I help build amazing products</div>
        <div className='font-Fira text-[#6F7F9E] py-2 mb-2'>
            <div>
                <span className='text-[#F50057] font-bold'>[Full-Time]</span> Product Manager @ Detrack
            </div>
            <div>
                <span className='text-[#F50057] font-bold'>[Part-Time]</span> Product Strategy Consultant, Indie Hacker, Writer, Dog Parent
            </div>
        </div>
        <div className='text-[#6F7F9E] font-Inter py-7'>
            <span className='text-[#F7F7F7]'>I’m a Product & Business nerd.</span><br/>
            During my free time, I write about product and work on my side projects.<br/>
            In my down time, I geek out on startups, new tech and product management.<br/>
            Current working full-time on Detrack
        </div>
    </div>
  )
}

export default Hero