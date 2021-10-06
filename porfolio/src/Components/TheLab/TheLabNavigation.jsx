import React from 'react'
import { Link } from 'react-router-dom'

export default function TheLabNavigation() {
    return (
        <div  id="theLab-navigation">
            The Lab Navigation

            <ul>
                {
                    labNavLinks.map(link=>{

                            return <li><Link id = {link.id} to = {link.path}>{link.a}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}


const labNavLinks=[
    {
        id: 1,
        a: 'Getting Started with Pi Zero',
        path: '/articles/getting-started-with-pi-zero'
    },
    {
        id: 2,
        a: 'Learning Code for Beginners',
        path: '/articles/learning-code-for-beginners'
    },
    {
        id: 3,
        a: '',
        path: '/articles/getting-started-with-pi-zero'
    },
    {
        id: 4,
        a: 'Persistence and Databases',
        path: '/articles/persistence-and-databases'
    },
    {
        id: 5,
        a: 'Basic Bash Commands',
        path: '/articles/basic-bash-commands'
    }
]