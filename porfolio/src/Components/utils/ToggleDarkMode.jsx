import React, { useState, useEffect, useContext } from 'react'
import { appContext } from '../Context/appContext';
import useScroll from '../Hooks/UseScroll';
import { setTheme } from './Themes';

//redux


export default function ToggleDarkMode(props) {
    
    const darkMode = useContext(appContext).darkMode
    const setDarkMode = useContext(appContext).setDarkMode
    const scroll = useScroll()

    console.log(darkMode)
    
    const [ togClass, setTogClass ] = useState('dark');
    let theme = localStorage.getItem('theme');


    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
            setDarkMode(true)
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
            setDarkMode(false)
        }
        console.log(scroll)

    }, [theme, scroll])


    function handleOnClick(){
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    return (
        <div style= {scroll > 50? {opacity: '.9'}: null} className="container--toggle">
            {
                togClass === "light" ?
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
                :
                <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="toggle" className="toggle--label">
            </label>
        </div>
    )
}

