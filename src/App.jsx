import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App () {
  return (
    <>
      <div className='top_page'>
        <Header />
        <FrontPage />
      </div>
      <Skills />
      <Projects />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
