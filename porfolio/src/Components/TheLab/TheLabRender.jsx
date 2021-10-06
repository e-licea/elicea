import React from 'react'
import images from '../utils/images'

//components
import TheDay from './TheDay'


export default function TheLabRender(props) {
    return (
        <div id = 'theLab-render'>
            <TheDay/>
            <div id = 'theLab-homeImg' style = {{backgroundImage: `url(${images.desktop})`}}>

            </div>
            
        </div>
    )
}
