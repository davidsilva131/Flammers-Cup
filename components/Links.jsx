// import { Link } from 'react-scroll'
import Link from 'next/link'

const Links = ({ open, setOpen }) => {
  const pages = [
    {
      text: 'inicio',
      href: 'inicio'
    },
    {
      text: 'equipos',
      href: 'https://github.com/'
    }
  ]
  return (
    <div
      className={`transition-all ease-out duration-500 md:transition-none ${
        open ? 'h-screen' : 'h-0'
      }  items-center w-full md:flex  md:h-14 md:w-auto md:order-1`}
      id='navbar-sticky'
    >
      <ul
        className={`${
          !open && 'hidden'
        } md:flex duration-300 ease-out sm:transition-none flex flex-col p-4 md:p-0 mt-4 font-medium bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent`}
      >
        {pages.map(page => (
          <li key={page.text}>
            <Link
              rel='noopener noreferrer'
              target='_blank'
              href={page.href}
              className='block cursor-pointer py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 uppercase hover:text-orange-500 hover:transition-all hover:duration-700'
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
