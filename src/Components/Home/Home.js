import React from 'react';
import Projects from '../Projects/Projects';
import About from './About/About';
import Header from './Header/Header';
import './Home.css'
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div style={{backgroundColor:''}} className="container">
           <Header></Header>
           <About></About>
           <Skills></Skills>
           <Projects></Projects>
        </div>
    );
};

export default Home;