import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Academics from './components/academics/Academics';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
const App = () => {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Academics/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  )
}

export default App
