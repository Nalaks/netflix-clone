import type { NextPage } from 'next'
import Head from 'next/head'
import useAuth from '../hooks/useAuth'
import { LayoutProps } from '../types/types'
import Header from './Header'

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const { loading, logout } = useAuth()

  if (loading) {
    // TODO: Add loading component
    return <div>Loading...</div>
  }

  return (
    <div className='relative h-screen bg-gradient-to-b lg:h-[140vh]'>
      <Head>
        <title>Netflix Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        {children}
      </main>
    </div>
  )
}

export default Layout
