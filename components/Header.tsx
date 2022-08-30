import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HiSearch, HiBell } from 'react-icons/hi'

const Header: NextPage = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={isScrolled ? 'bg-[#141414]' : ''}>
      <div className='flex items-center space-x-2 -mt-8 -mb-8 md:space-x-10'>
        <Image
          src='/netflix_logo.svg'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
          alt='netflix logo'
        />
        <ul className='hidden space-x-4 md:flex'>
          <li className='header-link'>Home</li>
          <li className='header-link'>TV Shows</li>
          <li className='header-link'>Movies</li>
          <li className='header-link'>New & Popular</li>
          <li className='header-link'>My List</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 text-sm font-light -mt-8 -mb-8'>
        <HiSearch className='hidden sm:inline h-6 w-6' />
        <p className='hidden lg:inline'>Kids</p>
        <HiBell className='h-6 w-6' />
        <div></div>
        <Link href='/account'>
          <Image
            src='/account_logo.png'
            width={30}
            height={30}
            className='cursor-pointer rounded'
            alt='account logo'
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
