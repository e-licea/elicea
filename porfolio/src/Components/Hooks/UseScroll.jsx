import React, { useState, useEffect } from 'react'

export default function useScroll() {
    
    //initial state of scroll position (at the top)
    const [scroll, setScroll] = useState(0);
    const [prevScroll, setPrevScroll ] = useState(0);

    useEffect(() => {

        //Handler to control what happens when user is scrolling
        function handleScroll(){

            setScroll(window.scrollY);
        }
        // Event listener to listen for scrolling
        window.addEventListener('scroll', handleScroll);
        // call handler right away to update state with initial scroll  
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    return scroll
}
