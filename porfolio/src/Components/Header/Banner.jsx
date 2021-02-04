import React from 'react';
//import Components
import github from '../../img/icons/github.svg';
import instagram from '../../img/icons/instagram.svg';
//bit.dev imports
import FadeIn from '@bit/nsebhastian.gsap-react.fade-in';
import AtomSpinner from '@bit/bondz.react-epic-spinners.atom-spinner';


export default function Banner() {



    return (
        <FadeIn direction = 'down' duration = {.9}>
            <nav className = 'Banner'>
                {/* <img src={logo} alt=""/> */}
                <span><h2> <AtomSpinner color = '#ffffff' size = '50'/>elicea</h2></span>
                <div className = 'Banner-X'>
                    
                    <div className="socialmedia">
                        <a href="#" className = 'icon'><img src={github} alt="github"/></a>
                        <a href="#" className = 'icon'><img src={instagram} alt="instagram"/></a>

                        
                    </div>
                </div>
            </nav>
        </FadeIn>
    )
}
