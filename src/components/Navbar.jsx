import React from 'react'
import { faArrowRightLong, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <div className='w-full fixed bg-white shadow-lg z-2000'>
        <nav className='w-[100%] flex flex-row justify-between '>
            <div className='w-[110px] h-[100px] my-auto flex'>
                {/* <img src={'/Splittas/assets/brand.jpg'} alt="" className='w-auto h-auto scale-75'/> */}
                <h1 className='my-auto text-[26px] font-bold  ml-4 z-50 text-black'>SommyTech</h1>
            </div>
        
            <ul className='hidden lg:flex font-bold gap-4 my-auto'>
                <li className='text-[#21a776] '>Home</li>
                <li>About <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
                <li>Services</li>
                <li>Testionials</li>
                <li>Contact <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></li>
            </ul>
        
            <div className='my-auto flex items-center'>
                <button className='w-[120px] lg:w-[150px] h-[40px] lg:h-[45px] bg-gray-900 rounded-3xl text-white font-bold text-[14px] lg:text-[17px] mr-4'>
                    Hire Us <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
                <button className='text-[29px] pr-2 text-black lg:hidden'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
        
        
    </div>
  )
}

export default Navbar