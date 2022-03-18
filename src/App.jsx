import React from 'react';
import { default as About, default as Service } from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Skill from './components/skills/Skill';


const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Skill />
      <Portfolio />
      <Service />
      <Contact/>
      <Footer />
    </>
  )
}

export default App