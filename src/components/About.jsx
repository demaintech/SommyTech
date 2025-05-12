import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <>
      <h2 className='text-center text-[65px] font-semibold mt-24'>Who we are</h2>

      <div className='w-full flex-col lg:flex-row flex justify-center  gap-4'>
        <div className='w-[100%] flex justify-center items-center lg:w-[45%] h-[400px]'>
            <img src={'/Splittas/assets/about.png'} alt="" className='w-auto h-auto '/>
        </div>
        <div className='w-[100%] lg:w-[45%] pl-4 my-auto'>
            <h1 className='text-[25px] lg:text-[40px] font-semibold'>Get to know about <span className='text-[#21a776]'>Sommy <br /> Tech.</span></h1>
            <p className='text-[16px] text-gray-600 font-normal text-sm/6 w-[80%] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deserunt dignissimos ipsum labore non dolor dolore animi quibusdam repellat perspiciatis expedita enim saepe assumenda vitae pariatur provident esse, itaque rerum.</p>
            <button className='w-[150px] h-[45px] bg-[#21a776] rounded-3xl text-white font-semibold text-[17px] mt-8'>Read more <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
        </div>
    </div>
    </>
  )
}

export default About