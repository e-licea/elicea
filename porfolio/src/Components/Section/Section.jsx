import React from 'react'
import { Route } from 'react-router-dom';


//import Components
import Nav from './Nav'
import Main from './Main'
import TheLab from '../TheLab/TheLab'

export default function Section() {
    return (
        <div className = 'Section'>
            <Nav/>
            <Route exact path ='/' component={Main} />
            <Route path ='/the-lab' component={TheLab}/>
        </div>
    )
}
