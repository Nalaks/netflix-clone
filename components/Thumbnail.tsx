import type { NextPage } from 'next'
import { Movie, ThumbnailProps } from '../types/types'
import Image from 'next/image'
import { THUMBNAIL_IMAGE_URL } from '../lib/constants'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../lib/modelAtom'

const Thumbnail: NextPage<ThumbnailProps> = ({ movie }) => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  const handleOpenModal = () => {
    setCurrentMovie(currentMovie)
    setShowModal(true)
  }

  return (
    <div
      className='relative h-28 min-w-[160px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'
      onClick={handleOpenModal}>
      <Image
        src={`${THUMBNAIL_IMAGE_URL}${
          movie.backdrop_path || movie.poster_path
        }`}
        alt={movie.title}
        className='rounded-sm object-cover md:rounded'
        layout='fill'
      />
    </div>
  )
}

export default Thumbnail
