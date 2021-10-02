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
                    Greetings internet traveler! I am a software engineer based in Chicago, IL!
                </p>
                <p>
                    I am driven by the world of computer science and all of it's components. My overall goal is to develop strong fundamental programming skills that will help me build more advanced skills to expand my scope of programming.
                </p>
                <p>
                    I hope that in the near future, my skills will have evolved enough to tackle on cutting edge technologies like machine learning, so that I can contribute to the creation of the world of tomorrow.
                </p>
                <p>
                    Let's get to work! <img id = 'coffee' src="https://media1.giphy.com/media/eNwO33cDf7H60uqErv/giphy.gif?cid=790b7611000c7bb538a0c0adb414c3dff4017f55bfee2371&rid=giphy.gif" alt="" />
                </p>



            </div>
        </>
    )   
}
