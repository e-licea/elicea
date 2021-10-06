import React from 'react'

import Banner from '../Reuseables/Banner';

//components
import TheLabNavigation from './TheLabNavigation';
import TheLabRender from './TheLabRender';




export default function TheLab() {


    return (
        <>
            <Banner title = 'The Lab' imgSrc = 'https://i.pinimg.com/originals/db/74/c1/db74c1d2a76d7ee5a81668f8b3c5378e.gif'/>
            <label   id = 'theLab-search' htmlFor="">Search:
            
                <input 
                   type="text"
                    placeholder= 'the Lab...' 
                />
            </label>
            <div id="TheLab">
                <TheLabNavigation/>
                <TheLabRender/>
            </div>
        </>
    )
}
