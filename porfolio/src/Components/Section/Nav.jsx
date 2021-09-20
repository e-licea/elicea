import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-scroll';
import { Link as L } from 'react-router-dom'
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

    const [scroll, setScroll] = useState(0);
    let winScroll = useScroll();

    const darkMode = useContext(appContext).darkMode
    const setDarkMode = useContext(appContext).setDarkMode
    const [ hideMenu, setHideMenu ] = useState(true);

    useEffect( () => {
            setWindowSize(winSize.width)
            //console.log(windowSize);
            setScroll(winScroll)
            //console.log(scroll)
            if(windowSize > 1000){
                setHideMenu(true)
            }
    }, [winSize.width, winScroll])



    function hideTheMenu(){
        console.log(hideMenu)
        setHideMenu(!hideMenu);
        
    }

    return (

            <div className = {!hideMenu?'hideTheMenu':'Nav'} >

                { windowSize < 1001? null : <h4>Esteban Licea Jr.</h4>} 
                <div className='social-media'>
                    <a target = '_blank'  href="https://github.com/e-licea"><img src={darkMode?githubLight: githubDark} alt="" /></a>
                </div>
                <ul>
                    <li><Link to = 'Intro' smooth = {true} duration = {300} offset={0}>Intro</Link></li>
                    <li><Link to = 'Skills' smooth = {true} duration = {300} offset={0}>Skills</Link></li>
                    <li><Link to = 'Projects' smooth = {true} duration = {300} offset={0}>Projects</Link></li>
                    <li><Link to = 'Contact' smooth = {true} duration = {300} offset={0}>Contact</Link></li>
                    {/*<li><L to = '/the-lab' >Blog</L></li>
                    {/*<li><L to = '/the-lab' >Blog</L></li>*/}
                    {
                    scroll > 350? 
                        <li id = {!hideMenu? 'Back2Top': 'back2Top'}>
                            <Link to='Jumbotron' smooth ={true} duration = {300} offset = {-100}>
                                <img src={up} alt="" />    
                            </Link>
                        </li>:null
                    }
                    {
                    windowSize < 1001? 
                        <div onClick = {hideTheMenu} id = {!hideMenu? 'HideMenu': 'hideMenu'}>
                            <img src={menu} alt="" />    
                        </div>:null
                    }
                </ul>


            </div>

    )
}

