import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full h-[200px] flex p-16 bg-black">
      <div className="max-w-[1240px] w-full flex justify-between items-center mx-auto">
        <a
          href={'https://github.com/uferekalu'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white cursor-pointer" size={23} />
        </a>
        <a
          href={'https://www.linkedin.com/in/kalu-ufere-a5b0787a/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white cursor-pointer" size={23} />
        </a>
        <a
          href={'https://twitter.com/lushak_tech'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-white cursor-pointer" size={23} />
        </a>
        <a
          href={'https://www.youtube.com/@uferegoodnews599'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-white cursor-pointer" size={23} />
        </a>
      </div>
    </div>
  )
}

export default Footer
