import React from 'react'
import { Route } from 'react-router-dom';


//import Components
import Nav from './Nav'
import Home from './Home';
import TheLab from '../TheLab/TheLab'
import ToggleDarkMode from '../utils/ToggleDarkMode';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';

export default function Render() {
    return (
        <div className = 'Render'>
            <ToggleDarkMode/>
            <Nav/>
            <Route exact path = '/'  component = {Home}/>
            <Route path = '/skills'  component = {Skills}/>
            <Route path = '/projects'  component = {Projects}/>


            <Contact/>
            
        </div>
    )
}