import { init } from 'ityped'
import React, { useEffect } from 'react'

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
    return (
        <>
            <span id = 'IntroHeader' className="Main-h3"></span>

            <div id = 'Intro'>


                <p>
                    Greetings internet traveler! I am a full-stack software engineer based in Chicago, IL!
                </p>
                <p>
                    I am driven by the world of computer science and all of it's underlying components. Learning every day and tackling the most abstract concepts of CS is what fuels me every day. 
                </p>
                <p>
                    My overall goal is to continue adding valuable skills to my stack so that I can contribute to the evolvement of cutting edge technologies like neural networks, automation,  and artificial intelligence.
                </p>
                <p>
                    Contact me, let's get to work! <img id = 'coffee' src="https://media1.giphy.com/media/eNwO33cDf7H60uqErv/giphy.gif?cid=790b7611000c7bb538a0c0adb414c3dff4017f55bfee2371&rid=giphy.gif" alt="" />
                </p>



            </div>
        </>
    )   
}
