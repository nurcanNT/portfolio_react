//import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Testimoniols from './components/testimoniols/Testimoniols';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';

const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
     <Home />
     <About />
     <Services />
     <Resume />
     <Portfolio />
     <Testimoniols />
     <Blog />
     <Contact />
    </main>
    </>
  )
}
export default App;
