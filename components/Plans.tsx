import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { HiCheck } from 'react-icons/hi'
import useAuth from '../hooks/useAuth'
import Table from './Table'

const Plans: NextPage<{ setSubscriptions: any }> = ({ setSubscriptions }) => {
  const { logout } = useAuth()
  return (
    <>
      <Head>
        <title>Netflix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='border-b border-white/10 bg-[#141414]'>
        <Link href='/'>
          <Image
            src='/netflix_logo.svg'
            width={150}
            height={90}
            className='cursor-pointer object-contain '
            alt='netflix logo'
          />
        </Link>
        <button
          className='text-lg font-medium hover:underline'
          onClick={logout}>
          Sign Out
        </button>
      </header>

      <main className='mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10 !mt-20'>
        <h1 className='mb-3 text-3xl font-medium'>
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className='flex items-center gap-x-2 text-lg'>
            <HiCheck className='check-icon' /> Watch all you want. Ad-free.
          </li>
          <li className='flex items-center gap-x-2 text-lg'>
            <HiCheck className='check-icon' /> Recommendations just for you.
          </li>
          <li className='flex items-center gap-x-2 text-lg'>
            <HiCheck className='check-icon' /> Change or cancel your plan
            anytime.
          </li>
        </ul>

        <div className='mt-4 flex flex-col space-y-4'>
          <div className='flex w-full items-center justify-center self-end md:w-3/5'>
            <div className='plan-box'>Basic</div>
            <div className='plan-box'>Standard</div>
            <div className='plan-box'>Premium</div>
          </div>
          <Table />
          <button onClick={() => setSubscriptions(true)}>Subscribe</button>
        </div>
      </main>
    </>
  )
}

export default Plans
