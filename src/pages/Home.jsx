
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Team from '../components/Team'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Portfolio from "../components/Portfolio"




function Home() {

  return (
    <>
        <Navbar/>
        <Heading/>
        <About/>
        <Services/>
        <Skills/>
        <Portfolio/>
        <Resume/>
        <Team/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home