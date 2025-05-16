import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const clients = [
    {
        name: "Kingsley",
        position: "CEO Allie Tech",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde",
        profile: "",
    },

    {
        name: "Kingsley",
        position: "CEO Allie Tech",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde",
        profile: "",
    },

    {
        name: "Kingsley",
        position: "CEO Allie Tech",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde",
        profile: "",
    },

    {
        name: "Kingsley",
        position: "CEO Allie Tech",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde",
        profile: "",
    },

    {
        name: "Kingsley",
        position: "CEO Allie Tech",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde",
        profile: "",
    },
];

const clientsection = clients.map(client =>
    <div className='mx-auto w-[300px] h-[200px] rounded-3xl bg-white flex flex-col pl-4 pt-4'>
        <span>
            <FontAwesomeIcon icon={faQuoteLeft} />
        </span>
        <h2 className='text-[22px] font-bold'>{client.name}</h2>
        <h5 className='text-[#21a776] font-semibold'>{client.position}</h5>
        <p className='w-[90%]'>{client.description}</p>
    </div>
);

const Testimonials = () => {
  return (
    <div className='w-full h-auto py-16 bg-gray-600 mt-24 mb-16'>
        <h1 className='text-center font-bold text-[45px] lg:text-[55px] text-white'>What Our Clients Say</h1>

        <div className='w-[100%] grid  grid-cols-1 md:grid-cols-2 gap-y-12 lg:grid-cols-5 mt-12'>
            {clientsection}
        </div>
    </div>
  )
}

export default Testimonials;