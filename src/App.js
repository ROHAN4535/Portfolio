import Navbar from '../src/components/Navbar';
import HeroSection from '../src/components/HeroSection';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import ContactMe from '../src/components/ContactMe';
import Footer from '../src/components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1130px] mx-auto' >
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      <Toaster position="bottom-right"
      reverseOrder={false}/>
    </div>
  );
}

export default App;
