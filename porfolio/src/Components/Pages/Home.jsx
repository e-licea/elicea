import React from 'react'
import Intro from './Home/Intro'
import Heatmap from './Home/Heatmap'
import Featured from './Home/Featured'
import Skills from './Skills'

export default function Home() {
    return (
        <div>
            <Intro/>
            <Skills/>
            <Featured/>
            <Heatmap/>
        </div>
    )
}
