import './App.css'
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/Home';
import { About } from './components/About';
import { InfoCards } from './components/InfoCards';
import { educationData } from './components/EducationData';
import { projectData } from './components/ProjectData';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <InfoCards title="Education" data={educationData} />
      <InfoCards title="Projects" data={projectData} />
    </>
  );
}

export default App
