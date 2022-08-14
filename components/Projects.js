import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='mx-10 md:mx-40 my-12 font-Inter' id='Projects'>
        <div className='text-3xl font-bold '>
            <span className='text-[#F50057] font-Fira pr-3'> 
                02 
            </span>
            Projects
        </div>
        <div className='flex flex-col lg:flex-row lg:mx-40 my-20 items-center'>
            <div className='lg:-mr-20 grayscale-[80%] transition hover:grayscale-0 ease-in duration-200 hover:scale-110'>
                <Image src="/DeC.png" width={500} height={300} alt='Decomponent'/>
            </div>
            <div className='text-right lg:-ml-12 z-10 pt-10 lg:pt-0'>
                <div className='text-[#F50057] font-Fira pr-3'>
                    Design
                </div>
                <div className='text-2xl font-bold font-Inter pr-3'>
                    Decomponent
                </div>
                <div className='p-5 max-w-md bg-[#001D46] rounded-lg font-Inter text-[#6F7F9E] shadow-md '>
                    A repository of design resources for UX/UI designers.
                    Everything you need for your next design project, from design systems to free stock photos, from free illustrations to UI mockups.
                </div>
                <div className='text-right pr-6 mt-2'>
                    <a className='text-[#F50057]' href='https://decomponent.com/' target='_blank' rel="noreferrer">
                        Link
                    </a>
                </div>
            </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row lg:mx-40 my-20 items-center'>

            <div className='text-left lg:-mr-12 z-10 pt-10 lg:pt-0'>
                <div className='text-[#F50057] font-Fira pr-3'>
                    Non-Profit
                </div>
                <div className='text-2xl font-bold font-Inter pr-3'>
                    Grateful Cloud
                </div>
                <div className='p-5 max-w-md bg-[#001D46] rounded-lg font-Inter text-[#6F7F9E] shadow-md '>
                    A repository of design resources for UX/UI designers.
                    Everything you need for your next design project, from design systems to free stock photos, from free illustrations to UI mockups.
                </div>
                <div className='text-left pr-6 mt-2'>
                    <a className='text-[#F50057]' href='https://grateful-cloud.fufei.io/' target='_blank' rel="noreferrer">
                        Link
                    </a>
                </div>
            </div>
            <div className='lg:-ml-20 grayscale-[80%] hover:grayscale-0 hover:scale-110 transition duration-200 '>
                <Image src="/GC.png" width={500} height={300} alt='Grateful Cloud'/>
            </div>
        </div>
    </div>
  )
}

export default Projects