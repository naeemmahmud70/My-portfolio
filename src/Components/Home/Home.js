import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import About from './About/About';
import Header from './Header/Header';
import './Home.css'
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div style={{backgroundColor:''}} className="container-fluid">
           <Header></Header>
           <About></About>
           <Skills></Skills>
           <Projects></Projects>
           <Service></Service>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;