import NavBar from './components/NavBar';
import HeroSection from './Sections/HeroSection';
import MessageSection from './Sections/MessageSection';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import FlavourSection from './Sections/FlavourSection';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
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
        </div>
      </div>
    </main>
  )
}

export default App