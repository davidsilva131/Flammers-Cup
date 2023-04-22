'use client'
// import { Link } from 'react-scroll'
import Link from 'next/link'

const Links = ({ open, setOpen }) => {
  const pages = [
    {
      text: 'inicio',
      href: '/'
    },
    {
      text: 'equipos',
      href: 'https://github.com/',
      target:'_blank'
    },
    {
      text:'sorteo',
      href:'/sorteo'
    },
    {
      text:'stream',
      href:'https://www.twitch.tv/itzzurdo',
      target:'_blank'
    }
  ]
  return (
    <div
      className={`transition-all ease-out duration-500 lg:transition-none ${
        open ? 'h-screen' : 'h-0'
      }  items-center w-full lg:flex  lg:h-14 lg:w-auto lg:order-1`}
      id='navbar-sticky'
    >
      <ul
        className={`${
          !open && 'hidden'
        } lg:flex duration-300 ease-out lg:transition-none flex flex-col p-4 lg:p-0 mt-4 font-medium bg-transparent lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent`}
      >
        {pages.map(page => (
          <li key={page.text}>
            <Link
              rel='noopener noreferrer'
              target={page.target? page.target: ''}
              href={page.href}
              className='block cursor-pointer py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:text-white lg:p-0 uppercase hover:text-orange-500 hover:transition-all hover:duration-700'
            >
              {page.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Links
