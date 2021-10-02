import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../Context/appContext';
//Icons
import github from '../../img/icons/github.svg'
import githubDark from '../../img/icons/dark/github.png'
import githubLight from '../../img/icons/light/github.png'
import up from '../../img/icons/up.svg'
import down from '../../img/icons/down.svg'
import menu from '../../img/portfolioImg/m-menu.svg'

//Hooks
import useWindowSize from '../Hooks/UseWindowSize'
import useScroll from '../Hooks/UseScroll'

export default function Nav() {

    const [ windowSize, setWindowSize ] = useState(0)
    const winSize = useWindowSize()

    let scroll = useScroll();

    const darkMode = useContext(appContext).darkMode
    const setDarkMode = useContext(appContext).setDarkMode
    const [ hideMenu, setHideMenu ] = useState(true);
    const [ focusedLink, setFocusedLink ] = useState('1');
    

    function backToTopSmooth(e){
        e.preventDefault();
        return window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    return (

            <div className = 'Nav' style = {scroll > 350? {opacity: '.9'}:null} >

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

