import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef, useEffect, useState } from "react";
import { NavbarContext } from "../../context/NAvContext";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa6";

const FullScreenNav = () => {
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
  const fullScreenRef = useRef(null);
  const tlRef = useRef(null); // store GSAP timeline
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  useEffect(() => {
  if (navOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto"; // cleanup on unmount
  };
}, [navOpen]);


  // Create timeline only once
  useGSAP(() => {
    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current
      .set(fullScreenRef.current, { display: "block" }) // make sure it's visible
      .from(".staircase", {
        height: 0,
        stagger: { amount: -0.25 },
      })
      .from(".link", {
        opacity: 0,
        rotateX: 90,
        stagger: { amount: -0.2 },
      })
      .from(".navlink", { opacity: 0 });
  }, []);

  // Play or reverse depending on navOpen
  useEffect(() => {
    if (tlRef.current) {
      if (navOpen) {
        tlRef.current.play();
      } else {
        tlRef.current.reverse();
      }
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      className="fullscreennav text-white min-h-screen w-full fixed overflow-hidden z-50 hidden " // hidden by default
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="staircase h-full w-1/5 bg-black"></div>
          <div className="staircase h-full w-1/5 bg-black"></div>
          <div className="staircase h-full w-1/5 bg-black"></div>
          <div className="staircase h-full w-1/5 bg-black"></div>
          <div className="staircase h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div className="relative">
        <div className="navlink flex w-full justify-between items-start lg:p-5 p-2">
          {/* Logo */}
          <div>
            <div onClick={() => setNavOpen(false)} className="w-40 cursor-pointer">
              
              <svg
                className=" w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                {" "}
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                />{" "}
              </svg>
            </div>
          </div>

          {/* Close Button */}
          <div
            onClick={() => setNavOpen(false)}
            className="lg:h-32 h-24 lg:w-32 w-24 relative cursor-pointer"
          >
            <div className="lg:h-45 h-32 lg:w-1 w-0.4 origin-top -rotate-45 w-1 bg-[#D3FD50] absolute"></div>
            <div className="lg:h-45 h-32 lg:w-1 w-0.4 origin-top right-0 rotate-45 w-1 bg-[#D3FD50] absolute"></div>
          </div>
        </div>

        {/* Links */}
        <div className="py-20">
         <Link to="/projects" onClick={() => setNavOpen(false)}>
          <div className="link origin-top border-t-1 border-white relative overflow-hidden cursor-pointer">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase" >
              Projets
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              
              <div className="moveX flex items-center h-full w-full">
                
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/varanasi.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/hinduism.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center ">
                
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/varanasi.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/hinduism.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
         </Link>
          <Link to="/agents" onClick={() => setNavOpen(false)}>
          <div className="link origin-top border-t-1 border-white relative overflow-hidden cursor-pointer">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
              Agence
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              
              <div className="moveX flex items-center h-full w-full">
                
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/varanasi.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/hinduism.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center ">
                
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/varanasi.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/hinduism.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          </Link>
          <Link to="/" onClick={() => setNavOpen(false)}>
          <div className="link origin-top border-t-1 border-white relative overflow-hidden cursor-pointer">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
              Contact
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              
              <div className="moveX flex items-center h-full w-full">
                
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/varanasi.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/hinduism.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center ">
                
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/varanasi.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/hinduism.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          </Link>
          <Link to="/" onClick={() => setNavOpen(false)}> 
          <div className="link origin-top border-y-1 border-white relative overflow-hidden cursor-pointer">
            <h1 className="font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
              Blogue
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              
              <div className="moveX flex items-center h-full w-full">
                
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/varanasi.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/hinduism.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center ">
                
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/varanasi.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl text-center lg:leading-[0.8] lg:pt-7 pt-3 uppercase">
                  
                  Pour Tout Voir
                </h2>
                <img
                  className="lg:h-30 h-14 py-2 rounded-full shrink-0 lg:w-76 w-32 object-cover"
                  src="/assets/hinduism.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          </Link>
         <div className="link flex flex-row  justify-center 
              text-white font-[font2] 
               gap-4 px-2 py-3 lg:text-[3vw] text-[6vw] lg:mt-0 mt-[10vh]
               whitespace-nowrap 
             ">
               <FaGlobe className="mt-1" />
               <span className="font-semibold uppercase">Varanasi</span>
               <span className=''>{time}</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
