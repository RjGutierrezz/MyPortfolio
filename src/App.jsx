import LogoSection from './components/LogoSection.jsx'
import NavBar from './components/NavBar.jsx'
import Contact from './sections/Contact.jsx'
import ExperianceSection from './sections/ExperienceSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'

const App = () => {
    return (
      <>
        <NavBar/>
        <Hero/>
        <ShowcaseSection/>
        {/* <LogoSection/>  */}
        <FeatureCards/>
        <ExperianceSection/>
        <TechStack/>
        <Contact/>
        <Footer/>
      </>
    )
  }
  
  export default App