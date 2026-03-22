import NavBar from './components/NavBar';
import HeroSection from './Sections/HeroSection';
import MessageSection from './Sections/MessageSection';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import FlavourSection from './Sections/FlavourSection';
import NutritionSection from './Sections/NutritionSection';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <NutritionSection />
        </div>
      </div>
    </main>
  )
}

export default App