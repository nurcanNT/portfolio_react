//import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Testimoniols from './components/testimoniols/Testimoniols';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
     <Home />
     <About />
     <Resume />
     <Portfolio />
     <Testimoniols />
     <Contact />
    </main>
    </>
  )
}
export default App;
