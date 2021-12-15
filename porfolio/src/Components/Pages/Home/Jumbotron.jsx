import React, { useEffect } from 'react'
//bit.dev imports
import { init } from 'ityped';
import {Link} from 'react-router-dom'
import res from '../../../img/_res.pdf'

export default function Jumbotron() {

    useEffect(() => {
        
        const type = document.querySelector('#type');

        const typeConfig = {
            cursorChar: '_',
            strings:[
                'Hello and welcome in!...',
                'I am a full-stack software developer.',
                'Let\'s create something together!',
                "\'Knowledge is power!\' - Francis Bacon",
                '\'First solve the problem, then write the code\' -John Johnson',
                '\'Simplicity is the soul of efficiency.\' – Austin Freeman'
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

            <div id = 'callToAction'>

                <a className = 'button-48' target='_blank' href={res}>
                    <span className="text">Resume</span>
                </a>

                <Link className = 'button-48' role = 'button' to= '/projects' role="button">
                    <span className="text">Projects</span>
                </Link>

                <Link className = 'button-48' to = '/contact'  role="button">
                    <span className="text">Contact</span>
                </Link>

            </div>



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

