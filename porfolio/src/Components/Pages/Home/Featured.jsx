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
                onClick = { e=> {onClick(e, 1)}}
            >
                <h4>For Team Collaboration!</h4>
                <img src={images.rTeamMockup} alt="" />

                <Link to ='/projects' onClick={e=> window.scrollTo(0,0)}>The Social Platform</Link>
                <p>The Social Platform is one of my more larger projects to date. It is exactly as the name suggests. Read more about how this project is being developed and feel free to try it out.</p>
                <br />

            </div>
            <div 
                className = 'radial-gradient'
                onClick = { e=> {onClick(e, 0)}}>
            
                <h4>In Production...</h4>
                <img src={images.reactSnkrsMockup} alt="" />
                <Link to ='/projects' onClick={e=> window.scrollTo(0,0)}>The Ultimate Sneaker App!</Link>
                <p>
                    Currently in production, is a small sneaker application that serves useful data for all sneaker heads alike. Explore a database of sneakers and be the first to find out about the latest sneaker releases.
                </p>
                
            </div>
        </div>
        </>
    )
}
