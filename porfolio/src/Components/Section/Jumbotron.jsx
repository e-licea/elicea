import React from 'react'

//bit.dev imports
import ReactBlinkText from '@bit/eden.10secondsofcode.react-blink-text';

export default function Jumbotron() {
    return (
        <div id = 'Jumbotron'>
           
            <h3 id = 'Jumbo-msg'><span id = 'term-x'> ~ % </span>Welcome, Happy you made it here! I am a Programmer!<ReactBlinkText fontSize = '1.8rem' text ='_' color='white'/></h3>

        </div>
    )
}
