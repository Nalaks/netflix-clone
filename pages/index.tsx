import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import MovieSection from '../components/MovieSection'
import getMovies from '../lib/getMovies'
import { HomeProps } from '../types/types'

const Home: NextPage<HomeProps> = props => {
  return (
    <Layout>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <Hero netflixOriginals={props.netflixOriginals} />
      <MovieSection allMovies={props} />
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  } = await getMovies()
  return {
    props: {
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries
    }
  }
}
