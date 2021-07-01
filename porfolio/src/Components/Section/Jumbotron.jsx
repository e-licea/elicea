import React from 'react'

//bit.dev imports

export default function Jumbotron() {
    return (
        <div id = 'Jumbotron'>
           <ToolBar/>
           <span id = 'term'><span id = 'term-x'>root@elicea:~# <span id = 'Jumbo-msg'>  Welcome, Happy you made it here! I am a Programmer!</span></span> </span>

        </div>
    )
}


function ToolBar(){


    return(
        <div className="ToolBar">
            <div>
                    <div id ='close' />

                    <div id ='expand'  />

                    <div id ='mini'  />
            </div>
        </div>
    )
}