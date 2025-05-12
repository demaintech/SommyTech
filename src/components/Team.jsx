import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const teams = [
    {
        name: "Demain",
        position: "Js developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde",
        profile: "",
    },

    {
        name: "Damaris",
        position: "Mobile App Dev - Flutter",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde",
        profile: "",
    },

    {
        name: "Chidinma",
        position: "Software developer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde",
        profile: "",
    },

    {
        name: "Sommy",
        position: "Cyber Security",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde",
        profile: "",
    },
];


const teamsection = teams.map(team =>
    <div className='w-[300px] h-[400px] rounded-3xl mx-auto border-2 pt-4 flex flex-col justify-between'>
        <div>
            <div className='w-[120px] h-[120px] rounded-full border-2 mx-auto'></div>
            <h2 className='text-[24px] text-center font-semibold mt-2'>{team.name}</h2>
            <h3 className='text-center text-[#21a776]'>{team.position}</h3>
            <p className='text-center mx-auto w-[90%] mt-2'>{team.description}</p>
        </div>
        <div className='w-[100%] flex justify-center pb-4'>
            <button className='w-[150px] h-[45px] bg-[#21a776] text-white rounded-3xl text-[15px] font-semibold'>View Porfolio <FontAwesomeIcon className='-rotate-45' icon={faArrowRightLong} /></button>
        </div>
    </div>
)

const Team = () => {
  return (
    <div className='w-full mt-24 pb-24'>
        <h1 className='text-center font-bold text-[45px] lg:text-[55px]'>Our Team</h1>
        <p className='w-[55%] text-[17px] text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas cumque unde labore animi, sunt, laudantium inventore, magni repellendus quaerat adipisci fuga culpa iusto optio a odio? Tenetur, quidem enim!</p>
        <div className='w-[90%]  mx-auto grid grid-cols-4 mt-16 '>
            {teamsection}
        </div>
    </div>
  )
}

export default Team;