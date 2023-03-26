import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import About from './About';
import How from './How';
import Signup from './Signup';
import Footer from './Footer';

export default function Home() {
    return (
        <div className='main'>
            <Navbar />
            <Hero />
            <About/>
            <How/>
            <Signup/>
            <Footer/>
        </div>
    );
}
