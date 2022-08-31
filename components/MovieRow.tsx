import type { NextPage } from 'next'
import { MovieRowProps } from '../types/types'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Thumbnail from './Thumbnail'

const MovieRow: NextPage<MovieRowProps> = ({ title, movies }) => {
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h2 className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl'>
        {title}
      </h2>
      <div className='group relative md:-ml-2'>
        <HiChevronLeft className='chevron-button' />
        <div>
          <Thumbnail />
        </div>
        <HiChevronRight className='chevron-button' />
      </div>
    </div>
  )
}

export default MovieRow
