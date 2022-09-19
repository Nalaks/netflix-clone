import type { NextPage } from 'next'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../lib/modelAtom'
import { HiOutlineX } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { Movie } from '../types/types'

const Modal: NextPage = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [movie, setMovie] = useState<Movie | null>(null)
  const [trailer, setTrailer] = useState<string | null>(null)
  const [genres, setGenres] = useState<string | null>(null)

  const handleClose = () => {
    setShowModal(false)
  }

  const fetchMovie = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.TMDB_API_KEY
        }&language=en-US&append_to_response=videos`
      )
      const data = await res.json()

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: any) => element.type === 'Trailer'
        )
        setTrailer(data.videos?.results[index]?.key)
      }
      if (data?.genres) {
        setGenres(data.genres)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (movie) {
      fetchMovie()
    }
  }, [movie])

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className='modal-btn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]'>
          <HiOutlineX className='h-6 w-6' />
        </button>

        <div></div>
      </>
    </MuiModal>
  )
}

export default Modal
