import type { NextPage } from 'next'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../lib/modelAtom'
import {
  HiOutlineX,
  HiPlus,
  HiThumbUp,
  HiVolumeOff,
  HiVolumeUp
} from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { Genre, VideoType } from '../types/types'
import ReactPlayer from 'react-player/lazy'
import { FaPlay, FaStop } from 'react-icons/fa'

const Modal: NextPage = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [movie, setMovie] = useRecoilState(movieState)
  const [trailer, setTrailer] = useState<string | null>(null)
  const [genres, setGenres] = useState<Genre[] | null>(null)
  const [muted, setMuted] = useState<boolean>(true)
  const [playing, setPlaying] = useState<boolean>(true)

  const handleClose = () => {
    setShowModal(false)
  }

  const fetchMovie = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&language=en-US&append_to_response=videos`
      )
      const data = await res.json()

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: VideoType) => element.type === 'Trailer'
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
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className='fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide'>
      <>
        <button
          onClick={handleClose}
          className='modal-btn absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]'>
          <HiOutlineX className='h-6 w-6' />
        </button>

        <div className='relative pt-[56.25%]'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing={playing}
            muted={muted}
          />
          <div className='absolute bottom-10 flex w-full items-center justify-between px-10'>
            <div className='flex space-x-2'>
              <button
                className='flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]'
                onClick={() => setPlaying(!playing)}>
                {playing ? (
                  <>
                    <FaStop className='h-7 w-7 text-black' />
                    Stop
                  </>
                ) : (
                  <>
                    <FaPlay className='h-7 w-7 text-black' />
                    Play
                  </>
                )}
              </button>
              <button className='modal-btn '>
                <HiPlus className='h-7 w-7' />
              </button>
              <button className='modal-btn'>
                <HiThumbUp className='h-7 w-7' />
              </button>
            </div>
            <button className='modal-btn' onClick={() => setMuted(!muted)}>
              {muted ? (
                <HiVolumeOff className='h-6 w-6' />
              ) : (
                <HiVolumeUp className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        <div className='flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8'>
          <div className='space-y-6 text-lg'>
            <div className='flex items-center space-x-2 text-sm'>
              <p className='font-semibold text-green-400'>
                {movie!.vote_average * 10} % Match
              </p>
              <p className='font-light'>
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className='flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs'>
                HD
              </div>
            </div>
            <div className='flex flex-col gap-x-10 gap-y-4 font-light md:flex-row'>
              <p className='w-5/6'>{movie?.overview}</p>
              <div className='flex flex-col space-y-3 text-sm'>
                <div>
                  <span className='text-[gray]'>Genres: </span>
                  {genres?.map(genre => genre.name).join(', ')}
                </div>
                <div>
                  <span className='text-[gray]'>Original Language: </span>
                  {movie?.original_language}
                </div>
                <div>
                  <span className='text-[gray]'>Total votes: </span>
                  {movie?.vote_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  )
}

export default Modal
