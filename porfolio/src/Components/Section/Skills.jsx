import React from 'react'

//imported skills
import node from '../../img/genImg/node.png';
import react from '../../img/genImg/react.svg';
import js from '../../img/genImg/javascript-39404.png';
import mysql from '../../img/genImg/mysql.svg';
import python from '../../img/genImg/python.png';
import redux from '../../img/genImg/redux.svg';
import git from '../../img/genImg/git-icon.png'
import pg from '../../img/genImg/postgresql.jpg'

const skills = [
    {
        skill: "PostgreSql",
        end: 'db',
        img: pg,
        description: [
            "Setting up setting up express servers with route handlers.",
            "Connecting RESTful APIs with sql databases for persistence.",
            "User authentication with JSON tokens or sessions. ",
            "Back-end app testing with Jest"
    
    ]
    },
    {
        skill: "Git",
        end: 'skill',
        img: git,
        description: [
            "Adaptive to git commands and version control flow.",
            "Handling conflicts carefully and strategically",
    ]
    },
    {
        skill: "NodeJS",
        end: 'back',
        img: node,
        description: [
            "Setting up setting up express servers with route handlers.",
            "Connecting RESTful APIs with sql databases for persistence.",
            "User authentication with JSON tokens or sessions. ",
            "Back-end app testing with Jest"
    
    ]
    },
    {
        skill: "ReactJS",
        end: 'front',
        img: react,
        description: [
            "Working with functional and class components with dynamic state.",
            "Creating global state with useContext",
            "Interacting with authenticated RESTful APIs ",
            "Testing back end applications with Jest"
    
    ]
    },
    {
        skill: "JavaScript",
        end: 'front',
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
        end: 'db',
        img: mysql,
        description: [
            "D",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },
    {
        skill: "Python",
        end: 'back',
        img: python,
        description: [
            "Data Scraping and browser automation with Selenium.",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },
    {
        skill: " React Redux",
        end: 'front',
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
                <>
                    <div>
                        {/* GENERAL SKILLS */}
                        {
                            skills.map((skill)=>{
                                if(skill.end == 'skill'){
                                    return(
                                    <div className = 'SkillCard'>
                                        <div >
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                        {description(skill.description)}
                                    </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div>
                        <h2>Front End</h2>
                        {
                            skills.map((skill)=>{
                                if(skill.end == 'front'){
                                    return(
                                    <div className = 'SkillCard'>
                                        <div >
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                        {description(skill.description)}
                                    </div>
                                    )
                                }
                            })
                        }

                    </div>
                    <div>
                        <h2>Database</h2>
                        {
                            skills.map((skill)=>{
                                if(skill.end == 'db'){
                                    return(
                                    <div className = 'SkillCard'>
                                        <div >
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                        {description(skill.description)}
                                    </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div>
                        <h2>Back End</h2>
                        {
                            skills.map((skill)=>{
                                if(skill.end == 'back'){
                                    return(
                                    <div className = 'SkillCard'>
                                        <div >
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                        {description(skill.description)}
                                    </div>
                                    )
                                }
                            })
                        }
                    </div>
                </>

            </div>
        </div>
    )
}

function description(arr){

    return(
        <ul className ='skill-list'>
            {arr.map((desc, index)=>{return <li> <span id="bullit">✶</span>   {desc}</li>})}
        </ul>
    )
}