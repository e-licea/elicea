import React from 'react'
import Typical from 'react-typical';
//bit.dev imports

export default function Jumbotron() {
    return (
        <>
        <div id = 'Jumbotron'>
           <ToolBar/>
           <span id = 'term'>root@elicea:~#</span>
                       <Typical
                className = 'type'
                wrapper = 'span'
                loop = {Infinity}
                steps = {[
                    '  Hello! Glad you made it!',
                    2000,
                    '  I am a full stack software developer!',
                    2000,
                    '  Let\'s innovate together!',
                    2000,
                ]}
            />


        </div>

        </>
    )
}


function ToolBar(){


    return(
        <div className="ToolBar">
            <div>
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

