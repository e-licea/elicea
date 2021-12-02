import React from 'react'

import Banner from '../Reuseables/Banner';
import images from '../utils/images';
//hooks
import UseWindoSize from '../Hooks/UseWindowSize.jsx'
//components
import TheLabNavigation from './TheLabNavigation';
import TheLabRender from './TheLabRender';
import TheLabPanel from './TheLabPanel';




export default function TheLab() {

    const width = UseWindoSize().width

    return (
        <>
            <Banner arr = {['Welcome to the Lab...', 'Tech Articles', 'Guides & Tutorials']} imgSrc = {images.desktop}/>
            <TheLabPanel/>
            <div id="TheLab">
                {width > 750? <TheLabNavigation/>: null}
                <TheLabRender/>
            </div>
        </>
    )
}
