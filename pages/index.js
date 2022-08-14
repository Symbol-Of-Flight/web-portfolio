import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Writing from '../components/Writing'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hi! I'm Fu Fei</title>
        <meta name="description" content="Nice to meet you! Thanks for taking the time to check this out" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#0A192F] text-[#F7F7F7] ">
        <Navbar/>
        <Hero/>
        <Writing/>
        <Projects/>
        <Footer/>
      </main>
    </div>
  )
}
