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
        })
    }
    
    return (

            <div 
            data-aos = 'fade-up'
            // data-aos= {width > 600? "fade-down": "fade-up" }
            data-aos-duration="200" 
            data-aos-offset="0"
            className = 'Nav' 
            style = {scroll > 350? {opacity: '.9'}:null} >

                <ul>
                {
                    scroll > 350? 
                        <li >
                            <Link style = {{color: '#01B1FD'}} onClick = {backToTopSmooth}> To Top</Link>
                        </li>:null
                }
                    <li onClick = {backToTopSmooth} id = '1' ><Link to = '/' >Home</Link></li>
                    <li onClick = {backToTopSmooth} id = '3'><Link to = '/projects' >Projects</Link></li>
                    
                    {/* <li onClick = {backToTopSmooth} id = '2'><Link to = '/the-lab' >The Lab</Link></li> */}
                    {/*<li><L to = '/the-lab' >Blog</L></li>*/}


                </ul>
                <div className='social-media'>
                    <a target = '_blank'  href="https://github.com/e-licea"><img src={githubLight} alt="" /></a>
                </div>

            </div>

    )
}

//<img src={darkMode?githubLight: githubDark} alt="" />