import { faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightLong, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Home = () => {
  return (

    // purple = #5c07B7 Blue = #0A3161 Blue = #27AAE1
    <div className='w-full h-[100%]'>
    {/* Hero */}

        <section className='w-full flex justify-center text-center bg-gray-900 text-white mt-24 h-[100vh]'>
            <div className='w-[100%] pt-8'>
                <h1 className='text-[45px] lg:text-[78px] font-extrabold'><span className='text-[#21a776]'> Digital </span> Solutions for a<br /> Smarter <span className='text-[#21a776]'>Future. </span></h1>
                <p className='w-[47%] mx-auto mt-4 text-gray-300 font-normal text-lg/6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laborum odit. Facere ullam in dolore consequuntur voluptas sequi asperiores tempora non recusandae culpa optio molestiae eligendi, dolorem blanditiis ad labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ratione iusto aut incidunt totam cum, quisquam labore, fugit possimus facere quas tempore. Nobis totam, esse officia sint doloremque recusandae debitis.</p>
                <div className='flex justify-center gap-4 mt-8'>
                    <button className='w-[120px] lg:w-[150px] h-[40px] lg:h-[45px] bg-[#21a776] rounded-3xl text-white font-semibold text-[14px] lg:text-[17px]'>Hire Us<FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                    <div className='flex items-center gap-2 my-auto'>
                        {/* <h2 className='text-[17px] lg:text-[20px] font-bold text-[#5c07B7]'>Hire Us</h2>
                        <div className='w-[3px] bg-[#5c07B7] h-[25px]'></div> */}
                        <ul className='flex gap-2 text-[#21a776 ] text-[18px] font-bold'>
                            <li><FontAwesomeIcon icon={faXTwitter} /></li>
                            <li><FontAwesomeIcon icon={faFacebook} /></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Home;