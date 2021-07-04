import React, { useState, useEffect } from 'react'
import UseWindowSize from '../Hooks/UseWindowSize'
import { Link } from 'react-scroll';
import { Link as L } from 'react-router-dom'

//bit.dev imports

export default function Nav() {

    const [ windowSize, setWindowSize ] = useState(0)
    const winSize = UseWindowSize()

    useEffect(async () => {
            setWindowSize(winSize.width)
            //console.log(windowSize)
    }, [winSize.width])

    return (

            <div className = 'Nav'>
                <ul>
                    <li><Link to = 'About' smooth = {true} duration = {300} offset={-100}>About</Link></li>
                    <li><Link to = 'Skills' smooth = {true} duration = {300} offset={-100}>Skills</Link></li>
                    <li><Link to = 'Projects' smooth = {true} duration = {300} offset={-100}>Projects</Link></li>
                    <li><Link to = 'Contact' smooth = {true} duration = {300} offset={50}>Contact</Link></li>
                    <li><L to = '/the-lab' >Blog</L></li>
                </ul>

            </div>

    )
}

