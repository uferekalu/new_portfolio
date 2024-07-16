import React from 'react'
import LatestProjects from './LatestProjects'

const Projects = () => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen justify-center items-center bg-[rgb(1,130,210)] pt-16 md:pt-24">
          <LatestProjects />
        {/* <div className="flex flex-col w-full max-w-[1240px] mx-auto p-4">
        
        </div> */}
        {/* <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div> */}
      </div>
    </>
  )
}

export default Projects
