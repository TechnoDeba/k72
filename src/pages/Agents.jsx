import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Agents = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = ['/assets/yogi.jpg',
    '/assets/ramdev.jpg','/assets/iitianbaba.jpg','/assets/ravishankar.jpg','/assets/sadhguru.jpeg','/assets/satyasaibaba.jpg','/assets/bageshwarbaba.jpeg','/assets/premanandmaharaj.jpg','/assets/anirudhcharya.jpg'
  ]
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: false,
        start:'top 32%',
        end:'top -120%',
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
onEnter: () => imageRef.current.src = imageArray[0],
        onUpdate:(elem)=>{
          const imageIdx= Math.floor(elem.progress * (imageArray.length - 1));
         if (imageRef.current.src !== imageArray[imageIdx]) {
    imageRef.current.src = imageArray[imageIdx];
  }
        }
      },
    });
  });

  return (
    <div className="parent bg-black">
      <div id="page1" className="py-1">
        <div
          ref={imageDivRef}
          className=" absolute  lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] overflow-hidden lg:rounded-4xl rounded-xl lg:top-56 top-2 left-[32vw]"
        >
          <img ref={imageRef}
            className="h-full object-cover w-full "
            src="/assets/yogi.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2] ">
          <div className=" lg:mt-[55vh] mt-[30vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
            <p className="lg:text-6xl text-xl leading-tight">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
            <p className="lg:hidden lg:text-6xl text-xl leading-tight">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
            <p className="lg:hidden lg:text-6xl text-xl leading-tight">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
            <p className="lg:hidden lg:text-6xl text-xl leading-tight">
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 lg:h-[30vh] h-[45vh]"></div>
    </div>
  );
};

export default Agents;
