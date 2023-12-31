import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import Head from 'next/head'
import Slider from 'react-slick/lib/slider'

import SkillItems from '../../components/Items/SkillItems'
import CinemaOnline from '../../public/assets/projects/cinema-online.png'
import Bootstrap from '../../public/assets/skills/bootstrap.png'
import ReactJS from '../../public/assets/skills/react.png'
import NodeJS from '../../public/assets/skills/node.png'
import ExpressJS from '../../public/assets/skills/express.png'
import MySQL from '../../public/assets/skills/MySQL.png'

import cinema1 from '../../public/assets/projects/ss-cinema-1.png';
import cinema2 from '../../public/assets/projects/ss-cinema-2.png';
import cinema3 from '../../public/assets/projects/ss-cinema-3.png';
import cinema4 from '../../public/assets/projects/ss-cinema-4.png';



const cinema = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Head>
        <title>Hilal Akbar | Cinema Online</title>
      </Head>
      <div className='w-full'>
        <div className="w-full relative h-[50vh]">
          <div className="absolute left-0 top-0 w-full z-10 bg-black/60 h-[50vh]" />
          <Image className='absolute z-1' src={CinemaOnline} layout='fill' objectFit='cover' alt="/" />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Cinema Online</h2>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          <div className='col-span-3'>
            <h2> Project Overview</h2>
            <p className='my-2'>
              Cinema Online is a website or platform that provides services to watch the latest movies with a paid system. The creation of the Cinema Online web intends to make it easier for users who want to watch the latest movies, but intheir place of residence there is no place to watch movies like cinemas
            </p>
            <div className='w-56 md:w-64 lg:w-auto mx-auto'>
              <div>
                <Slider {...settings}>
                  <div>
                    <Image src={cinema1} alt='Screenshot Cinemma 1' layout='responsive' />
                  </div>
                  <div>
                    <Image src={cinema2} alt='Screenshot Cinemma 1' layout='responsive' />
                  </div>
                  <div>
                    <Image src={cinema3} alt='Screenshot Cinemma 1' layout='responsive' />
                  </div>
                  <div>
                    <Image src={cinema4} alt='Screenshot Cinemma 1' layout='responsive' />
                  </div>
                </Slider>
              </div>
            </div>
            <div className='mt-8'>
              <a
                href='https://github.com/akbr-hilal/ReactJs-Cinema_Online'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8 buttonEnable'>Code</button>
              </a>
              <a
                href=''
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 buttonDisable' disabled>Demo</button>
              </a>
              <div className='mt-5'>
                <Link href='/#projects'>
                  <p className='underline cursor-pointer hover:text-[#071695]'>Back</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-span-4 md:col-span-2 shadow-md shadow-gray-400 rounded-xl py-2'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
                <SkillItems img={Bootstrap} title="Bootstrap" height={"48px"} width={"48px"} />
                <SkillItems img={ReactJS} title="React JS" height={"48px"} width={"48px"} />
                <SkillItems img={ExpressJS} title="Express JS" height={"48px"} width={"48px"} />
                <SkillItems img={NodeJS} title="Node JS" height={"48px"} width={"48px"} />
                <SkillItems img={MySQL} title="MySQL" height={"48px"} width={"48px"} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default cinema;