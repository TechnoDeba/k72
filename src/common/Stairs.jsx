import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';
const Stairs = (props) => {
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
const currentPath = useLocation().pathname;
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(stairParentRef.current, { display: 'block' }) // instantly show
      .from('.stair', {
        height: 0,
        stagger: { amount: -0.25 },
      })
      .to('.stair', {
        y: '100%',
        stagger: { amount: -0.25 },
      })
      .set(stairParentRef.current, { display: 'none' }) // instantly hide
      .to('.stair', { y: '0%' }); // reset stairs
      gsap.from(pageRef.current,{
        opacity:0,
        delay:1,
        scale:1.2
      })
  },[currentPath]);
  return (
   <div>
    <div
        ref={stairParentRef}
        className="h-screen w-full fixed z-20 top-0 hidden"
      >
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
   </div>
  )
}

export default Stairs