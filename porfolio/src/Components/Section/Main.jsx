import React from 'react'

//import Components
import Projects from './Projects';
import Jumbotron from './Jumbotron';
import Contact from './Contact';

//bit.dev imports
import FadeIn from '@bit/nsebhastian.gsap-react.fade-in';
import About from './About';
import Skills from './Skills';


export default function Main() {
    return (
        <FadeIn direction = 'left' duration = {.3}>
            <div className = 'Main'>

            	<Jumbotron/>
                <About/>
                <Skills/>
            	<Projects/>
            	<Contact/>       
            </div>
        </FadeIn>
        
    )
}
