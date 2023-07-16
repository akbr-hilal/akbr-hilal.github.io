import React from 'react'
import ProjectItem from './Items/ProjectItem'

import CinemaOnline from '../public/assets/projects/cinema-online.png'
import CashManagement from '../public/assets/projects/cash-management.png'

const Project = () => {
  return (
    <div id='project' className="w-full py-24 my-[160px]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
        <p className='uppercase text-[#071695] text-xl tracking-widest'>projects</p>
        <h2 className='py-4'>What I have build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Cinema Online" bgImg={CinemaOnline} tech="React JS, Node JS, Express JS, Bootstrap, MySQL" projectUrl='/project/cinema'/>
          <ProjectItem title="Cash Management (Static)" bgImg={CashManagement} tech={"Next JS, Typescript, Tailwind"} projectUrl="/project/cashmanagement"/>
        </div>
      </div>
    </div>
  )
}

export default Project