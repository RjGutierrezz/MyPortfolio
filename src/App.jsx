import NavBar from './components/NavBar.jsx'
import ExperianceSection from './sections/ExperienceSection.jsx'

import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'

const App = () => {
    return (
      <>
        <NavBar/>
        <Hero/>
        <ShowcaseSection/>
        <FeatureCards/>
        <ExperianceSection/>
      </>
    )
  }
  
  export default App