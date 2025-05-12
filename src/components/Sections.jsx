import React from 'react'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import WhyChooseus from './Whychooseus';
import Team from './Team';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const Sections = () => {
  return (
    <div className='w-[100%] overflow-auto'>
        <Home />
        <About />
        <Projects />
        <Services />
        <WhyChooseus />
        <Team />
        <Testimonials />
        <Contact />
        <Footer /> 
    </div>
  )
}

export default Sections