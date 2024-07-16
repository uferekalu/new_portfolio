import React, { useState } from 'react'
import { FaEye, FaCode } from 'react-icons/fa'
import { projectsData } from '../projectData'

const LatestProjects = () => {
  const [projectId, setProjectId] = useState(null)

  const handleMouseEnter = (id) => {
    setProjectId(id)
  }
  const handleMouseLeave = () => {
    setProjectId(null)
  }
  return (
    <div className="mx-auto py-14 px-4 text-center bg-yellow-600">
      <h1 className="text-white">Latest Projects </h1>
      <p className="py-4 text-white">Some of the latest projects...</p>
      <div className="max-w-[1240px] mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <div
            className="w-full relative h-[200px]"
            key={project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full h-full rounded-md"
              src={project.image}
              alt={project.title}
            />
            <div
              className={`absolute w-full h-full top-0 left-0 bg-gray-900 transition-opacity duration-300 rounded-md ${
                projectId === project.id ? 'opacity-100' : 'opacity-0'
              }`}
            ></div>
            {projectId === index + 1 && (
              <div
                className={
                  'absolute top-0 left-0 w-full h-full p-3 bg-[rgb(6,110,145)] rounded-md text-white text-sm text-left flex flex-col justify-center items-center transition-opacity duration-300'
                }
              >
                <span className="text-sm p-2 bg-[rgb(13,25,64)] rounded-md">
                  {project.title}
                </span>
                <p className="text-xs my-2 text-center">
                  {project.description.length > 200 ? `${project.description.slice(0, 200)}...` : project.description}
                </p>
                <div className="flex gap-4 p-3 bg-[rgb(99,43,39)] rounded-md mt-3">
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCode size={20} className="cursor-pointer" />
                  </a>
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEye size={20} className="cursor-pointer" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestProjects
