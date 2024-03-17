import Head from 'next/head'
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

      <main>
        <div className="header-container">
          <Header title="Ethan Lay - Full Stack Web Developer" />
          <p className="description">
            A full stack web developer with two years of experience. I have primarily worked with CodeIgniter, but I also have experience with React, Next.js, and Laravel. I'm passionate about building scalable and efficient web applications.
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
