import { GetMovies } from '../types/types'
import { URL } from './constants'

const getMovies: GetMovies = async () => {
  const apiKey = process.env.TMDB_API_KEY

  const requests = {
    fetchTrending: `${URL}/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `${URL}/discover/movie?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `${URL}/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `${URL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=28`,
    fetchComedyMovies: `${URL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `${URL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `${URL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `${URL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=99`
  }

  try {
    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries
    ] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then(res => res.json()),
      fetch(requests.fetchTrending).then(res => res.json()),
      fetch(requests.fetchTopRated).then(res => res.json()),
      fetch(requests.fetchActionMovies).then(res => res.json()),
      fetch(requests.fetchComedyMovies).then(res => res.json()),
      fetch(requests.fetchHorrorMovies).then(res => res.json()),
      fetch(requests.fetchRomanceMovies).then(res => res.json()),
      fetch(requests.fetchDocumentaries).then(res => res.json())
    ])
    return {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results
    }
  } catch (error) {
    console.log(error)
  }
  return {
    netflixOriginals: [],
    trendingNow: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    documentaries: []
  }
}

export default getMovies
