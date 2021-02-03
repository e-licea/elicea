import React from 'react';
//import Components
//bit.dev imports
import FadeIn from '@bit/nsebhastian.gsap-react.fade-in';
import ReactBlinkText from '@bit/eden.10secondsofcode.react-blink-text';


export default function Banner() {



    return (
        <FadeIn direction = 'down' duration = {.9}>
            <nav className = 'Banner'>
                {/* <img src={logo} alt=""/> */}
                <h2>elicea<ReactBlinkText fontSize = '1.8rem' text ='_' color='white'/></h2>
                <div className = 'Banner-X'>
                    
                    
                </div>
            </nav>
        </FadeIn>
    )
}
