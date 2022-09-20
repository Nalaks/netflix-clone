import { User } from 'firebase/auth'
export interface Genre {
  id: number
  name: string
}
export interface Movie {
  title: string
  backdrop_path: string
  media_type?: string
  release_date?: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface VideoType {
  type:
    | 'Bloopers'
    | 'Featurette'
    | 'Behind the Scenes'
    | 'Clip'
    | 'Trailer'
    | 'Teaser'
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface HomeProps extends AllMovies {}

export interface AllMovies {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}
export interface GetMovies {
  (): Promise<AllMovies>
}

export interface HeroProps {
  netflixOriginals: Movie[]
}

export interface MovieSectionProps {
  allMovies: AllMovies
}

export interface MovieRowProps {
  title: string
  movies: Movie[]
}

export interface ThumbnailProps {
  movie: Movie
}

export interface Inputs {
  email: string
  password: string
}

export interface AuthProviderProps {
  children: React.ReactNode
}

export interface IAuthContext {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  error: string | null
  loading: boolean
}
