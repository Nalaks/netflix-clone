import type { NextPage } from 'next'
import Head from 'next/head'
import { LayoutProps } from '../types/types'
import Header from './Header'

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Netflix Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout

// className='flex min-h-screen flex-col items-center justify center py-2'
