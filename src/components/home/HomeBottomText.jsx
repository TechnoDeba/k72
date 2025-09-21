import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGlobe } from "react-icons/fa6";

const HomeBottomText = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const options = {
        timeZone: "Asia/Kolkata", 
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(new Date().toLocaleTimeString("en-US", options));
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);
  return (
    <div className='font-[font2] flex items-center justify-center gap-3 mb-2'>
      <p className='absolute font-[font1] lg:w-[17vw] w-80  lg:right-5 right-1 bottom-50 text-sm lg:leading-relaxed leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className=" hidden absolute left-1 bottom-1
      lg:flex flex-row  justify-center 
     text-white font-[font2] 
      gap-4 px-2 py-3 text-[1vw] 
      whitespace-nowrap
    ">
      <FaGlobe className="text-[2.5vw]" />
      <span className="font-semibold mt-4 uppercase">Varanasi</span>
      <span className='mt-4'>{time}</span>
    </div>
      <div className="border-3 lg:ml-20 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-22 flex items-center px-10 border-white rounded-full uppercase">
        <Link className='text-[6vw] lg:mt-4  mt-2' to='/projects'>Projects</Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-22 flex items-center px-10 border-white rounded-full uppercase">
        <Link className='text-[6vw] lg:mt-4 mt-2' to='/agents'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText 