import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRecoilState, useRecoilValue } from 'recoil'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import MovieSection from '../components/MovieSection'
import useAuth from '../hooks/useAuth'
import getMovies from '../lib/getMovies'
import { HomeProps } from '../types/types'
import { modalState } from '../lib/modelAtom'
import Modal from '../components/Modal'

const Home: NextPage<HomeProps> = props => {
  const { loading } = useAuth()
  const showModal = useRecoilValue(modalState)

  if (loading) {
    // TODO: Add loading component
    return <div>Loading...</div>
  }
  return (
    <Layout>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <Hero netflixOriginals={props.netflixOriginals} />
      <MovieSection allMovies={props} />
      {showModal && <Modal />}
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
