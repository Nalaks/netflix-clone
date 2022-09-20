import type { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState } from '../lib/modelAtom'
import { LayoutProps } from '../types/types'
import Header from './Header'

const Layout: NextPage<LayoutProps> = ({ children }) => {
  const showModal = useRecoilValue(modalState)
  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}>
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
