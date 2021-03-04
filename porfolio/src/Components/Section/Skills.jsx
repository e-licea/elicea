import React from 'react'

//imported skills
import node from '../../img/genImg/node.png';
import react from '../../img/genImg/react.svg';
import js from '../../img/genImg/javascript-39404.png';
import mysql from '../../img/genImg/mysql.svg';
import python from '../../img/genImg/python.png';
import redux from '../../img/genImg/redux.svg';

const skills = [
    {
        skill: "NodeJS",
        img: node,
        description: [
            "Creating and deploying back end restful APIs with node express",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },
    {
        skill: "ReactJS",
        img: react,
        description: [
            "Welcome",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },
    {
        skill: "JavaScript",
        img: js,
        description: [
            "Creating and deploying back end restful APIs with node express",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },
    {
        skill: "MySql",
        img: mysql,
        description: [
            "Creating and deploying back end restful APIs with node express",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },
    {
        skill: "Python",
        img: python,
        description: [
            "Creating and deploying back end restful APIs with node express",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },
    {
        skill: " React Redux",
        img: redux,
        description: [
            "Creating and deploying back end restful APIs with node express",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },
 ]


export default function Skills() {


    return (
        <div id = 'Skills'>
            <h3 className="Main-h3">Skills</h3>
            <div id = 'CardContainer'>
                {
                    skills.map( (skill)=>{
                        const logo = skill
                        const arr = skill.description
                        console.log(logo.img, logo.description)
                        
                        return (
                            <div className = 'SkillCard'>
                                <div >
                                    <img
                                    src={skill.img}
                                    alt=""/>
                                    <p>{skill.skill}</p>
                                </div>
                                <div>{description(skill.description)}</div>
                            </div>

                            
                        )
                    })
                }
            </div>
        </div>
    )
}

function description(arr){

    return(
        <ul>
            {arr.map((desc, index)=>{return <li>{desc}</li>})}
        </ul>
    )
}