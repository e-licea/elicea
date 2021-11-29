import React, { useEffect } from 'react'
import { init } from 'ityped';

export default function Banner(props) {

    const { arr, imgSrc} = props;

    
    useEffect(() => {
        
         const text = document.querySelector('.BannerSpan')
         init(text, {
             cursorChar: '_',
             showCursor: false,
             loop: false,
             strings: arr
         })
    }, [])
    

    
    return (
        <div className = 'BannerContainer'>
        <img className = 'BannerImg' src = {imgSrc}/>
        <span className = 'BannerSpan' ></span>
        </div>
    )
}
