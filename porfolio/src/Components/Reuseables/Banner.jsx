import React, { useEffect } from 'react'
import { init } from 'ityped';

export default function Banner(props) {

    const { arr, imgSrc} = props;

    
    useEffect(async () => {
        
        let txt = document.querySelector('.BannerSpan')

        if (txt){
            init(document.querySelector('.BannerSpan'), {
                cursorChar: '_',
                showCursor: false,
                loop: true,
                strings: arr
            })
        }else{ return null}

         return()=>{}
    }, [])
    

    
    return (
        <div className = 'BannerContainer'>
        <img className = 'BannerImg' src = {imgSrc}/>
        <span className = 'BannerSpan' ></span>
        </div>
    )
}
