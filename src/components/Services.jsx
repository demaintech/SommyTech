import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBullseye, faChartArea, faCloud, faCode, faDatabase, faDesktop, faGlobe, faHeadset, faMobile, faMoneyBillTransfer, faMoneyCheckDollar, faNetworkWired, faPencil, faSeedling, faStore, faWallet, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faHackerNews } from '@fortawesome/free-brands-svg-icons';

const service = [
    {
        servicename: "Web developement",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faCode} />,
    },

    {
        servicename: "Mobile developement",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faMobile} />,
    },

    {
        servicename: "Cloud Services",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faCloud} />,
    },

    {
        servicename: "Networking",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faNetworkWired} />,
    },

    {
        servicename: "Desktop App",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faDesktop} />,
    },

    {
        servicename: "Google Business",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faStore} />,
    },

    {
        servicename: "Web & App Hosting",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faDatabase} />,
    },

    {
        servicename: "UI/UX",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faSeedling} />,
    },

    {
        servicename: "Branding",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faPencil} />,
    },

    {
        servicename: "Cyber Security",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        serviceicon: <FontAwesomeIcon icon={faHackerNews} />,
    },
];



const servicesection = service.map(services =>
    <div className='w-[95%] mx-auto mt-8 h-[140px]  border-2 rounded-xl flex flex-col justify-between items-center'>
        <div className='text-center flex flex-col items-center text-[#21a776] pt-6'>
            <span className='text-[20px]'>
                {services.serviceicon}
            </span>
            <h2 className='text-[19px] font-semibold text-gray-900'>{services.servicename}</h2>
            <p className='text-[15px] w-[90%] text-gray-700'>{services.description}</p>
        </div>
        {/* <div className='w-[80px] h-[2px] bg-white mb-2'></div> */}
    </div>
)


const Test = () => {
  return (
    <div className='w-full mt-20'>
        <h1 className='text-center font-bold text-[45px] lg:text-[55px] '>Our Services</h1>
        <div className='w-[100%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 px-auto'>
          {servicesection}
      </div>
    </div>
  )
}

export default Test