import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { HeroProps, Movie } from '../types/types'
import Image from 'next/image'
import { IMAGE_URL } from '../lib/constants'
import { FaPlay } from 'react-icons/fa'
import { HiInformationCircle } from 'react-icons/hi'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../lib/modelAtom'

const Hero: NextPage<HeroProps> = ({ netflixOriginals }) => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  const handleMoreInfo = () => {
    setCurrentMovie(currentMovie)
    setShowModal(true)
  }

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * netflixOriginals.length)
    setRandomMovie(netflixOriginals[randomIndex])
  }, [netflixOriginals])

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
        <Image
          src={`${IMAGE_URL}${
            randomMovie?.backdrop_path || randomMovie?.poster_path
          }`}
          alt='movie poster'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h1 className='text-xl lg:text-4xl md:text-2xl'>
        {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
      </h1>
      <p className='max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl'>
        {randomMovie?.overview}
      </p>

      <div className='flex space-x-3'>
        <button className='hero-button bg-white text-black'>
          <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' />
          Play
        </button>
        <button className='hero-button bg-[gray]/70' onClick={handleMoreInfo}>
          More Info <HiInformationCircle className='h-5 w-5 md:h-8 md:w-8' />
        </button>
      </div>
    </div>
  )
}

export default Hero
