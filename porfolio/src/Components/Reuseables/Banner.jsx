import React, { useEffect } from 'react'
import { init } from 'ityped';

export default function Banner(props) {

    const { title, imgSrc} = props;

    
    useEffect(() => {
        
         const text = document.querySelector('.Banner > span')
         init(text, {
             cursorChar: '_',
             showCursor: true,
             loop: false,
             strings: [
                 title
             ]
         })
    }, [])
    

    
    return (
        <div className = 'Banner' style = {{backgroundImage: `url(${imgSrc})` }}>
            <span></span>
        </div>
    )
}
