import React, {  useEffect, useState } from 'react'

//import Components
import Projects from './Projects';
import Jumbotron from './Jumbotron';
import Contact from './Contact';

//bit.dev imports
import About from './About';
import Skills from './Skills';

//Hooks 


export default function Main() {



    return (
            <>
                <div className = 'Main'>
                    
                    <Jumbotron/>
                    <About/>                    
                    <Skills/>
                    <Projects/>
                    <Contact/>       
                </div>
            </>
        
    )
}
