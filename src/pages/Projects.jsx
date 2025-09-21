import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {
  const projectArray = [{
    image1:'/assets/image1.jpg',
    image2:'/assets/image2.jpg'
  },
{
    image1:'/assets/image3.jpg',
    image2:'/assets/image4.jpg'
  },
{
    image1:'/assets/image5.jpg',
    image2:'/assets/image6.jpg'
  },
{
    image1:'/assets/shiva.jpg',
    image2:'/assets/varanasi.jpg'
  },
{
    image1:'/assets/durga.jpg',
    image2:'/assets/hinduism.jpg'
  },]
gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase text-black '>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projectArray.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects