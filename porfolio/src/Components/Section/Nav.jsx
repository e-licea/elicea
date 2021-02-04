import React from 'react'
import { Link } from 'react-scroll';

//bit.dev imports
import FadeIn from '@bit/nsebhastian.gsap-react.fade-in';

export default function Nav() {
    return (
        <FadeIn  direction = 'right' duration = {.9}>

            <div className = 'Nav'>
                <div className = 'profile-img'>

                </div>
                <ul>
                    <li><Link to = 'About' smooth = {true} duration = {300} offset={-100}>About</Link></li>
                    <li><Link to = 'Skills' smooth = {true} duration = {300} offset={-100}>Skills</Link></li>
                    <li><Link to = 'Projects' smooth = {true} duration = {300} offset={-100}>Projects</Link></li>
                    <li><Link to = 'Contact' smooth = {true} duration = {300} offset={50}>Contact</Link></li>
                </ul>
                <div id='biz-card'>
                    
                    <h4>Esteban Licea Jr.</h4>
                    <p>ph: <span>773-788-2189</span></p>
                    <p>email: <span>contact@elicea.com</span></p>


                </div>
            </div>
            </FadeIn>

    )
}
