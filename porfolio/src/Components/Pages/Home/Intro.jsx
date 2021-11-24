import { init } from 'ityped'
import React, { useEffect, useState } from 'react'
import useWindowSize from '../../Hooks/UseWindowSize'

export default function Intro() {

    useEffect(() => {

        const header = document.querySelector('#IntroHeader')
        const typeConfig = {
            cursorChar: '_',
            loop: false,
            strings: [
                'Intro'
            ]
        }
        init(header, typeConfig)

    }, [])

    const window = useWindowSize()

    const [gradient, setGradient] = useState({
        x:  '50%',
        y:  '50%'
    })

    function onMouseMove(e){
        
        let mouseXpercentage = Math.round(e.pageX / window.width * 100);
        let mouseYpercentage = Math.round(e.pageY / window.height * 100);
    
        let newState = {x: mouseXpercentage, y:mouseYpercentage}

        console.log(gradient)
        return setGradient(newState)

    }

    return (
        <>
            <span id = 'IntroHeader' className="Main-h3 "></span>

            <div onMouseMove={onMouseMove} className = 'radial-gradient' style = {{background: `radial-gradient(ellipse at ${gradient.x}% ${gradient.y}%, #9b59b6, #01B1FD )` }} id = 'Intro' >


                <p>
                    Greetings internet traveler! I am a full-stack software engineer based in Chicago, IL!
                </p>
                <p>
                    <span className = 'extraBigLetter'>L</span>ike your typical cliché programmer, I am driven by the world of computer science and all of it's underlying components. Learning every day and tackling the most abstract concepts of CS is what fuels me every day. My overall goal is to continue adding valuable skills to my stack so that I can contribute to the evolvement of cutting edge technologies.
                </p>
                <p>
      
                </p>
                <p>
                    Contact me, let's get to work! <img id = 'coffee' src="https://media1.giphy.com/media/eNwO33cDf7H60uqErv/giphy.gif?cid=790b7611000c7bb538a0c0adb414c3dff4017f55bfee2371&rid=giphy.gif" alt="" />
                </p>



            </div>
        </>
    )   
}
