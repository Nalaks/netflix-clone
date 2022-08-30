import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import getMovies from '../lib/getMovies'
import { HomeProps } from '../types/types'

const Home: NextPage<HomeProps> = ({ netflixOriginals }) => {
  console.log(netflixOriginals)
  return (
    <Layout>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <Hero netflixOriginals={netflixOriginals} />
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
