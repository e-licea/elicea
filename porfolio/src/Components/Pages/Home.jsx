import React from 'react'
import Intro from './Home/Intro'
import Heatmap from './Home/Heatmap'
import Featured from './Home/Featured'

export default function Home() {
    return (
        <div>
            <Intro/>
            <Featured/>
            <Heatmap/>
        </div>
    )
}
