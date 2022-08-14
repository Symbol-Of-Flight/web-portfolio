import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='py-10 md:px-20 flex flex-row md:justify-between justify-center'>
        <Image src="/Logo.svg" width={50} height={50} alt='Project F logo'/>
        <div className='hidden sm:block'>
          <div className="flex flex-row items-center font-Fira ">
              <Link href="#Writing">
                <div className='mx-4'>Writing</div>
              </Link>
              <Link href="#Projects">
                <div className='mx-4'>Projects</div>
              </Link>
              <Link href="#Footer">
                <div className='text-[#F50057] mx-4 border-2 border-[#F50057] px-4 py-1'>
                    Contact
                </div>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar