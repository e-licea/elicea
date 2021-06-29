import React from 'react'

//import Components
import Projects from './Projects';
import Jumbotron from './Jumbotron';
import Contact from './Contact';

//bit.dev imports
import About from './About';
import Skills from './Skills';


export default function Main() {
    return (
            <>
                <div className = 'Main'>
                    <Jumbotron/>
                    <Projects/>
                    
                    <Skills/>
                    <Contact/>       
                </div>
            </>
        
    )
}
