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
import Plans from '../components/Plans'
import { useState } from 'react'

const Home: NextPage<HomeProps> = props => {
  const { loading } = useAuth()
  const showModal = useRecoilValue(modalState)
  const [subscriptions, setSubscriptions] = useState(false)

  if (loading) {
    // TODO: Add loading component
    return <div>Loading...</div>
  }

  if (!subscriptions) return <Plans setSubscriptions={setSubscriptions} />

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
