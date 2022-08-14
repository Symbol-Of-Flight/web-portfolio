import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="bg-[#001D46] text-center py-12" id='Footer'>
        <div className='py-8 text-lg'>
            Gaining EXP points, <br/>
            one day at a time.
        </div>
        <div className='flex flex-row justify-center'>
        <a href='https://twitter.com/SymbolOfFlight' target='_blank' rel="noreferrer">
            <Image src="/Twitter.png" width={35} height={35} alt='Twitter'/>
        </a>
        <div className='mx-3 transition duration-150 ease-in hover:scale-110'>
        <a href='mailto: hi@fufei.io' target='_blank' rel="noreferrer">
            <Image src="/Mail.png" width={35} height={35} alt='Email'/>
        </a>
        </div>
            <a href='https://www.linkedin.com/in/fu-fei/' target='_blank' rel="noreferrer">
                <Image src="/Linkedin.png" width={35} height={35} alt='LinkedIn'/>
            </a>
        </div>



    </div>
  )
}

export default Footer