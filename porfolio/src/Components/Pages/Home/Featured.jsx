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
                <h4>Featured Project</h4>
                <img src={images.rTeamMockup} alt="" />

                <Link to ='/projects' onClick={e=> window.scrollTo(0,0)}>React Redux Multi-Chat Messenger</Link>
                <p>This build is a messenger tool where users can collaborate in groups or in pairs. Currently working on adding a status feed and shift the build more towards a social medial. Emojis have been implemented!.</p>

            </div>
            <div 
                className = 'radial-gradient'
                onClick = { e=> {onClick(e, 1)}}
            >
            
                <h4>Currently Working On</h4>
                <img src={images.reactSnkrsMockup} alt="" />
                <Link to ='/projects' onClick={e=> window.scrollTo(0,0)}>Sneaker Tool</Link>
                <p>
                    Currently in development, is a sneaker tool application that keeps sneaker consumers up to date on upcoming sneaker release information. In addition, they are able to research any sneaker that comes to mind.
                </p>
                
            </div>
        </div>
        </>
    )
}
