import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { HeroProps, Movie } from '../types/types'
import Image from 'next/image'
import { IMAGE_URL } from '../lib/constants'

const Hero: NextPage<HeroProps> = ({ netflixOriginals }) => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * netflixOriginals.length)
    setRandomMovie(netflixOriginals[randomIndex])
  }, [netflixOriginals])

  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='absolute top-0 left-0 -z-10 h-[95vh] w-[99vw]'>
        <Image
          src={`${IMAGE_URL}${
            randomMovie?.backdrop_path || randomMovie?.poster_path
          }`}
          alt='movie poster'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h1 className='text-2xl lg:text-7xl md:text-4xl'>
        {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
      </h1>
      <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
        {randomMovie?.overview}
      </p>
    </div>
  )
}

export default Hero
