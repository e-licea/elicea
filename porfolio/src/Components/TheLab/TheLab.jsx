import React from 'react'

import Banner from '../Reuseables/Banner';
import images from '../utils/images';
import SearchTheLab from './SearchTheLab';

//components
import TheLabNavigation from './TheLabNavigation';
import TheLabRender from './TheLabRender';




export default function TheLab() {


    return (
        <>
            <Banner arr = {['This is where the magic happens...']} imgSrc = {images.desktop}/>
            <SearchTheLab/>
            <div id="TheLab">
                <TheLabNavigation/>
                <TheLabRender/>
            </div>
        </>
    )
}
