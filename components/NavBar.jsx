import { useState } from 'react'
import { Link } from 'react-scroll'
import HamburgerButton from './HamburgerButton'
import Links from './Links'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header>
        <nav className='bg-black fixed w-full z-20 top-0 left-0'>
          <div className='bg-black w-full flex flex-wrap items-center justify-between py-4 px-4 lg:px-52'>
            <Link
              className='flex items-center justify-start cursor-pointer'
              to='inicio'
              spy
              smooth
              duration={500}
            >
              <span className='self-center text-2xl font-semibold whitespace-nowrap fire-gradient uppercase'>
                flammerscup
              </span>
            </Link>
            <div className='flex lg:hidden lg:order-2'>
              <HamburgerButton open={open} setOpen={setOpen} />
            </div>
            <Links open={open} setOpen={setOpen} />
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar
