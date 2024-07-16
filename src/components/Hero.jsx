import React from 'react'
import videoBg from '../assets/vid.mp4'

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={videoBg}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 className="font-bold text-xl sm:text-2xl my-2">Full Stack JavaScript Developer</h1>
        <div className="flex flex-col max-w-[700px] mx-auto w-full border p-4 mt-3 rounded-md text-black bg-gray-100/90">
          <p className="text-justify text-sm sm:text-lg">
            Experienced Full Stack JavaScript Developer with a track record of
            building and delivering intuitive and user-friendly web applications
            by adopting agile development methodology for ease of meeting
            client’s requirements.
          </p>
          <ul className='flex flex-col text-left'>
            <li className='text-justify text-xs sm:text-sm'>
             {"==>"} Proficient in JavaScript and TypeScript frameworks, including
              Node.js, React.js, Next.js, Nest.js, Express.js,
            </li>
            <li className='text-justify text-xs sm:text-sm'>
            {"==>"} Experienced with frontend libraries such as HTML5, CSS3,
              Material-UI, Tailwind CSS, Styled Components, Sass, Less,
              Bootstrap, Antd.
            </li>
            <li className='text-justify text-xs sm:text-sm'>
              {"==>"} Familiar with databases like MongoDB, MySQL, PostgreSQL, AWS
              DynamoDB, Firebase, and Redis.
            </li>
            <li className='text-justify text-xs sm:text-sm'>
              {"==>"} Skilled in cloud technologies and DevOps, particularly AWS
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero
