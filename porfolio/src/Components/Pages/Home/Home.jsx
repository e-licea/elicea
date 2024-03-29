import React from 'react'
import Intro from './Intro'
import Heatmap from './Heatmap'
import Featured from './Featured'
import Skills from '../Skills'
import Jumbotron from './Jumbotron'

export default function Home() {
    return (
        <div>
            {console.log(process.env.REACT_APP_API_URL)}
            <Jumbotron/>
            <Featured/>
            <Skills/>
            {/* <Intro/> */}
            <Heatmap/>
        </div>
    )
}
