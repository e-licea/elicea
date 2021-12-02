import React, { useContext } from 'react'
import { appContext } from '../Context/appContext'
import images from '../utils/images'


export default function Code(props) {

    const { _html } = props; 


    function onClick(e){
        e.preventDefault()
        console.log(e.target.offsetParent.innerText)
        let copyText = e.target.offsetParent.innerText
        navigator.clipboard.writeText(copyText)
    }

    const darkMode = useContext(appContext).darkMode
    const html = '<span>function myFunc(){<br/>   console.log(\'Hello World\')<br/>   axios.get(\'https://www.someurl.com\')<br/>}</span>'

    
    return (
        <>

            <pre className = 'code-container'>

            <span  dangerouslySetInnerHTML = {{__html: `${_html}`}}></span>
                
            <img onClick = {onClick} src = {darkMode? images.copy_dark: images.copy_light}  alt="something" />
            </pre>
        </>
    )
}

