import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Jumbotron from '../components/Jumbotron'
import Project from '../components/Project'
import Skill from '../components/Skill'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hilal Akbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Jumbotron />
      <About />
      <Skill />
      <Project />
      <Contact />
      <div className='flex justify-center py-12'>
          <Link href="/">
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <Icon icon="fluent:chevron-double-up-16-filled" color="#5651e5" width="30" />
              </div>
            </a>
          </Link>
        </div>
    </div>
  )
}