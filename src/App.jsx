import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/Home';
import { About } from './components/About';
import { InfoCards } from './components/InfoCards';
import { educationData } from './components/EducationData';
import { projectData } from './components/ProjectData';
import { Contact } from './components/Contact';
import { Bottom } from './components/Bottom';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      { threshold: 0.45 } // Adjust the threshold as needed
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <div className={`overflow-x-hidden ${isDarkMode ? 'dark' : 'light'} bg-[var(--mainBackground)] text-[var(--bodyText)]`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isHomeVisible={isHomeVisible} setIsDarkMode={setIsDarkMode} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setIsDarkMode={setIsDarkMode} />
      <div ref={homeRef}>
        <Home />
      </div>
      <About />
      <InfoCards title="Education" data={educationData} />
      <InfoCards title="Projects" data={projectData} />
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
