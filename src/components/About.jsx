import React from 'react'
import { skills, workExperience } from '../projectData'

const About = () => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen justify-center items-center bg-[rgb(1,130,210)] pt-16 md:pt-24">
        <div className="flex flex-col w-full max-w-[1240px] mx-auto p-4">
          <div className="grid sm:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col p-4 rounded-md bg-white shadow-[rgba(17,17,26,0.1)_0px_0px_8px] transition-shadow duration-300">
              <span className="flex justify-center font-bold">Summary</span>
              <p className="mt-2 text-[16px] text-justify">
                Experienced Full Stack JavaScript Developer with a track record
                of building and delivering intuitive and user-friendly web
                applications by adopting agile development methodology for ease
                of meeting client’s requirements.
              </p>
              <span className="mt-2 text-[16px] text-justify">
                *** Proficient in JavaScript and TypeScript frameworks,
                including Node.js, React.js, Next.js, Nest.js, Express.js.
              </span>
              <span className="mt-2 text-[16px] text-justify">
                *** Experienced with frontend libraries such as HTML5, CSS3,
                Material-UI, Tailwind CSS, Styled Components, Sass, Less,
                Bootstrap, Antd.
              </span>
              <span className="mt-2 text-[16px] text-justify">
                *** Familiar with databases like MongoDB, MySQL, PostgreSQL, AWS
                DynamoDB.
              </span>
              <span className="mt-2 text-[16px] text-justify">
                *** Skilled in cloud technologies and DevOps, particularly AWS.
              </span>
            </div>
            <div className="flex flex-col p-4 rounded-md bg-white shadow-[rgba(17,17,26,0.1)_0px_0px_8px] transition-shadow duration-300">
              <span className="flex justify-center font-bold my-3">Skills</span>
              <div className="grid grid-cols-3 gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm p-2 text-center font-bold bg-[rgb(1,130,210)] text-white rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-3 gap-3">
            <span className="flex justify-center font-bold my-3 p-2 bg-white rounded-md max-w-[150px] text-center mx-auto">
              Work Experience
            </span>
            {workExperience.map((work, index) => (
              <div
                className="flex flex-col w-full py-4 bg-white rounded-md px-6 shadow-lg"
                key={index}
              >
                <div className="flex gap-3 my-2">
                  <span className="text-sm font-bold w-[100px]">Role:</span>
                  <span className="text-sm">{work.role}</span>
                </div>
                <div className="flex gap-3 my-2">
                  <span className="text-sm font-bold w-[100px]">Company:</span>
                  <span className="text-sm">{work.company}</span>
                </div>
                <div className="flex gap-3 my-2">
                  <span className="text-sm font-bold w-[100px]">Type:</span>
                  <span className="text-sm">{work.type}</span>
                </div>
                <div className="flex gap-3 my-2">
                  <span className="text-sm font-bold w-[100px]">Date:</span>
                  <span className="text-sm">{work.date}</span>
                </div>
                <div className="flex gap-3 my-2">
                  <span className="text-sm font-bold w-[100px]">Location:</span>
                  <span className="text-sm">{work.location}</span>
                </div>
                <div className="flex flex-col gap-3 my-2">
                  {work.description.map((desc, index) => (
                    <span key={index} className="text-sm text-justify">
                      {desc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div> */}
      </div>
    </>
  )
}

export default About
