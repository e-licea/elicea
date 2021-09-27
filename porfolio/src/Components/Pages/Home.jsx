import React from 'react'
import Intro from './Home/Intro'
import Heatmap from './Home/Heatmap'
import Featured from './Home/Featured'
import Skills from './Skills'
import Jumbotron from './Jumbotron'

export default function Home() {
    return (
        <div>
            <Jumbotron/>
            <Intro/>
            <Skills/>
            <Featured/>
            <Heatmap/>
        </div>
    )
}
