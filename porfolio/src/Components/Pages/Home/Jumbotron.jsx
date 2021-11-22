import React, { useEffect } from 'react'
//bit.dev imports
import { init } from 'ityped';

export default function Jumbotron() {

    useEffect(() => {
        
        const type = document.querySelector('#type');

        const typeConfig = {
            cursorChar: '_',
            strings:[
                'Hello and welcome in!...',
                'I am a full-stack software developer.',
                'Automation is the motivation!',
                'Let\'s build something together!'
            ]
        }

        init(type, typeConfig)
        
    }, [])
    return (
        <>
        <div 
            id = 'Jumbotron'
        >
           <ToolBar/>

            <span id = 'term'>root@elicea:~# <span id="type"/> </span>

            {/* <div id = 'callToAction'>
                <Link to ='/projects'> Projects</Link>
                <Link to ='/contact'> Contact Me</Link>
            </div>

 */}

        </div>

        </>
    )
}


function ToolBar(){


    return(
        <div className="ToolBar">
                    <p>
                        something here
                    </p>
                    <p>
                        linux@linux:~/
                    </p>

                    <div id = 'windowControl'>
                        <div id ='mini'>
                            <img src='https://drive.google.com/uc?id=1VCiH1A3JqSzx8oMR_MX7PxMyzmolHAGZ' alt="" />
                        </div>

                        <div id ='expand'>
                            <img src='https://drive.google.com/uc?id=1D3szavs9XSbY4VWjnyIUo1m3mo2VUetE' alt="" />
                        </div>

                        <div id ='close'>
                            <img src='https://drive.google.com/uc?id=13EVMNDprBOFC-_0IYjl0qNVmOR7nLKa-' alt="" />
                        </div>

                    </div>
        </div>
    )
}

