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
                    <li><Link to = 'About' smooth = {true} duration = {700}>About</Link></li>
                    <li><Link to = 'Skills' smooth = {true} duration = {700}>Skills</Link></li>
                    <li><Link to = 'Projects' smooth = {true} duration = {700}>Projects</Link></li>
                    <li><Link to = 'Contact' smooth = {true} duration = {700}>Contact</Link></li>
                </ul>
            </div>
            </FadeIn>

    )
}
