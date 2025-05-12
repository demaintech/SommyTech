import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faNetworkWired, faPeopleGroup, faSeedling } from '@fortawesome/free-solid-svg-icons'

const WhyChooseus = () => {
  return (
    <div className='w-full mt-24 pb-24'>
        <h1 className='text-center font-bold text-[45px] lg:text-[55px]'>Why Choose Us?</h1>

        <div className='flex flex-col lg:flex-row items-center w-[100%] gap-6 justify-center mt-12'>
            <div className='flex flex-col w-[240px] h-auto'>
                <div className='w-[120px] flex justify-center items-center mx-auto h-[120px] border-2 rounded-full'>
                    <span className='text-[40px] text-[#21a776] font-semibold'>
                        <FontAwesomeIcon icon={faPeopleGroup} />
                    </span>
                </div>
                <h2 className='text-center text-[26px] mt-4 font-bold'>Experienced Experts</h2>
                <p className='text-center text-[16px] w-[90%] mt-2 text-gray-700 font-normal mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi libero quis, corrupti officiis possimus maiores
                </p>
            </div>
            <div className='h-[100px] flex items-center'>
                <h2 className='my-auto text-[20px] font-semibold text-[#5c07B7]'></h2>
            </div>
            <div className='flex flex-col w-[240px] h-auto'>
                <div className='w-[120px] flex justify-center items-center mx-auto h-[120px] border-2 rounded-full'>
                    <span className='text-[40px] text-[#21a776] font-semibold'>
                        <FontAwesomeIcon icon={faSeedling} />
                    </span>
                </div>
                <h2 className='text-center text-[26px] mt-4 font-bold'>Premium Design & Developmemt</h2>
                <p className='text-center text-[16px] w-[90%] mt-2 text-gray-700 font-normal mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi libero quis, corrupti officiis possimus maiores
                </p>
            </div>
            <div className='h-[100px] flex items-center'>
                <h2 className='my-auto text-[20px] font-semibold text-[#5c07B7] '></h2>
            </div>
            <div className='flex flex-col w-[240px] h-auto'>
                <div className='w-[120px] flex justify-center items-center mx-auto h-[120px] border-2 rounded-full'>
                    <span className='text-[40px] text-[#21a776] font-semibold'>
                        <FontAwesomeIcon icon={faHeadset} />
                    </span>
                </div>
                <h2 className='text-center text-[26px] mt-4 font-bold'>24/7 Customer Support</h2>
                <p className='text-center text-[16px] w-[90%] mt-2 text-gray-700 font-normal mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi libero quis, corrupti officiis possimus maiores
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseus