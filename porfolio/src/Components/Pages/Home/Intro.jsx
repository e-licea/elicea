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

        return setGradient(newState)

    }

    return (
        <>
            <span id = 'IntroHeader' className="Main-h3 "></span>

            <div onMouseMove={onMouseMove} className = 'radial-gradient' style = {{background: `radial-gradient(ellipse at ${gradient.x}% ${gradient.y}%, #9b59b6, #01B1FD )` }} id = 'Intro' >


                <p>
                <span className = 'extraBigLetter'>G</span>reetings internet traveler! I am a full-stack software engineer based in Chicago, IL!
                </p>
                <p>
                    Like most programmers, I can read, write, and compile code into useful programs for humans to use. Unlike most, my drive comes from the immersive, abstract world of computer science. When you stop and look around a little, you can see that CS consists of a spectrum of different topics and `flavors` that anyone can take part in. I was fortunate to find my taste through automation a few years ago. The idea of getting rid of boring tasks, or upgrading workflows through automation was a turning point for me. This is why when I build web applications, I like to keep automation in mind as a core component because automation builds efficient applications. 
                </p>

                <p>
                Currently, I am finding great satisfaction in using my skills to service others by collaborating with their ideas to make awesome, everyday applications. Please contact me if with your inquiries, feedback, and awesome ideas.
                     <img id = 'coffee' src="https://media1.giphy.com/media/eNwO33cDf7H60uqErv/giphy.gif?cid=790b7611000c7bb538a0c0adb414c3dff4017f55bfee2371&rid=giphy.gif" alt="" />
                </p>



            </div>
        </>
    )   
}
