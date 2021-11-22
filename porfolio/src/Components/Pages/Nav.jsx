import React, {  useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../Context/appContext';
//Icons
import githubDark from '../../img/icons/dark/github.png'
import githubLight from '../../img/icons/light/github.png'

//Hooks
import useScroll from '../Hooks/UseScroll'
import useWindowSize from '../Hooks/UseWindowSize';

export default function Nav() {


    let scroll = useScroll();
    let width = useWindowSize().width

    const darkMode = useContext(appContext).darkMode
    

    function backToTopSmooth(e){
        e.preventDefault();
        return window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    return (

            <div 
            data-aos= {width > 600? "fade-down": "fade-up" }
            data-aos-duration="400"
            data-aos-offset="100"
            className = 'Nav' 
            style = {scroll > 350? {opacity: '.9'}:null} >

                <ul>
                {
                    scroll > 350? 
                        <li >
                            <Link style = {{color: '#ff2052'}} onClick = {backToTopSmooth}> To Top</Link>
                        </li>:null
                }
                    <li id = '1' ><Link to = '/' >Home</Link></li>
                    <li id = '3'><Link to = '/projects' >Projects</Link></li>
                    
                    {/*<li><L to = '/the-lab' >Blog</L></li>
                    {/*<li><L to = '/the-lab' >Blog</L></li>*/}


                </ul>
                <div className='social-media'>
                    <a target = '_blank'  href="https://github.com/e-licea"><img src={darkMode?githubLight: githubDark} alt="" /></a>
                </div>

            </div>

    )
}

