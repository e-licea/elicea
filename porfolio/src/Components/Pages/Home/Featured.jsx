import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import images from '../../utils/images'
import { Link } from 'react-router-dom'
import { init } from 'ityped'
import { appContext } from '../../Context/appContext'
import { projects } from '../SlideShow'

export default function Featured() {

    const history = useHistory()

    useEffect(() => {

        const header = document.querySelector('#FeaturedHeader');
        init(header, {
            showCursor: true,
            cursorChar: '_',
            loop: false,
            strings:[
                'Featured Projects'
            ]
        })
    }, [])

    const activeProject = useContext(appContext).activeProject
    const setActiveProject = useContext(appContext).setActiveProject

    
    function onClick(e, id){
        e.preventDefault();
        window.scrollTo(0,0);
        setActiveProject(projects[id])

        return history.push('/projects')
    }


    return (
        <>
        <span className = 'Main-h3' id = 'FeaturedHeader'></span>
        <div 
        data-aos="fade-up" 
        data-aos-duration="600"
        data-aos-offset="200"
        id = 'Featured'>
            <div 
                className = 'radial-gradient'
                onClick = { e=> {onClick(e, 2)}}
            >
                <h4>The Holy Grail!</h4>
                <img src={images.rTeamMockup} alt="" />

                <Link to ='/projects' onClick={e=> window.scrollTo(0,0)}>The Social Platform</Link>
                <p>The Social Platform is my biggest project to date and is the project I am most proud of. It is a social-media platform that is heavily inspired by Slack and Discord with a touch of Facebook!</p>
                <br />

            </div>
            <div 
                className = 'radial-gradient'
                onClick = { e=> {onClick(e, 0)}}
            >
            
                <h4>In Production...</h4>
                <img src={images.hgrMockup} alt="" />
                <Link to ='/projects' onClick={e=> window.scrollTo(0,0)}>High Ground Restore Roofing</Link>
                <p>
                    Currently in production, is an ongoing partnership project with a starter roofing company here in Chicago. This application has a heavily SEO focused approach. Check it out in projects for more detailed information.
                </p>
                
            </div>
        </div>
        </>
    )
}
