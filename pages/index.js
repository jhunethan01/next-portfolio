import Head from 'next/head'
import Nav from '@components/Nav'
import Header from '@components/Header'
import Footer from '@components/Footer'
import About from '@components/About'
import Skills from '@components/Skills'
import Experience from '@components/Experience'
import Projects from '@components/Projects'
import Contact from '@components/Contact'

export default function Home() {
  return (
    <div className="home-container">
      <Head>
        <title>Ethan Lay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <div className="header-container" id='home'>
          <h1 className="title">Hello. I'm Ethan.</h1>
          <h1 className="title green">Full Stack Web Developer</h1>
          <p className="description">
            A full stack web developer with two years of experience. I have primarily worked with CodeIgniter (PHP), but I also have experience with React, Next.js, and Laravel.
          </p>
        </div>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
