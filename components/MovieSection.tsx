import type { NextPage } from 'next'
import { MovieSectionProps } from '../types/types'
import MovieRow from './MovieRow'

const MovieSection: NextPage<MovieSectionProps> = ({ allMovies }) => {
  const {
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  } = allMovies
  return (
    <>
      <section className='md:space-y-24'>
        <MovieRow title='Trending Now' movies={trendingNow} />
        <MovieRow title='Top Rated' movies={topRated} />
        <MovieRow title='Action Thrillers' movies={actionMovies} />
        {/* My List */}
        {/* {list.length > 0 && <MovieRow title='My List' movies={list} />} */}

        <MovieRow title='Comedies' movies={comedyMovies} />
        <MovieRow title='Scary Movies' movies={horrorMovies} />
        <MovieRow title='Romance Movies' movies={romanceMovies} />
        <MovieRow title='Documentaries' movies={documentaries} />
      </section>
    </>
  )
}

export default MovieSection
