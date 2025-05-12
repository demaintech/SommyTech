import React from 'react'

const Projects = () => {
  return (
    <div className='w-full py-8 bg-gray-600 mt-12'>
        <div className='w-[90%] grid grid-cols-4 mx-auto text-center text-white text-[25px] font-bold'>
            <div>
                <h2>Completed Projects</h2>
                <h3 className='text-[32px] text-[#21a776]'>7,507</h3>
            </div>
            <div>
                <h2>Countries</h2>
                <h3 className='text-[32px] text-[#21a776]'>210+</h3>
            </div>
            <div>
                <h2>Happy Clients</h2>
                <h3 className='text-[32px] text-[#21a776]'>6,850</h3>
            </div>
            <div>
                <h2>Patnerships</h2>
                <h3 className='text-[32px] text-[#21a776]'>720+</h3>
            </div>
        </div>
    </div>
  )
}

export default Projects