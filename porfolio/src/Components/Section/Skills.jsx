import React from 'react'

import Python from '../../img/portfolioImg/python.png'
import NodeJS from '../../img/portfolioImg/node.png'
import PostgreSQL from '../../img/portfolioImg/postgresql.png'
import MySQL from '../../img/portfolioImg/mysql.png'
import react from '../../img/portfolioImg/react.svg'
import Redux from '../../img/portfolioImg/redux.svg'
import HTML from '../../img/portfolioImg/html.png'
import CSS from '../../img/portfolioImg/css.png'
import JS from '../../img/portfolioImg/js.png'
import OSX from '../../img/portfolioImg/osx.png'
import Windows from '../../img/portfolioImg/win.png'
import Linux from '../../img/portfolioImg/linux.png'



const skills = [
    {
        skill: "Git",
        end: 'skill',
        img: 'https://drive.google.com/uc?id=1XZwPysnRZtGF2Prdpvs7q2uJdv8aLQc5',
        description: [
            "Adaptive to git commands and version control flow.",
            "Handling conflicts carefully and strategically",
    ]
    },    {
        skill: "Python",
        end: 'back',
        img: Python,
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
        skill: "NodeJS",
        end: 'back',
        img: NodeJS,
        description: [
            "Setting up setting up express servers with route handlers.",
            "Connecting RESTful APIs with sql databases for persistence.",
            "User authentication with JSON tokens or sessions. ",
            "Back-end app testing with Jest"
    
    ]
    },
    {
        skill: "HTML",
        end: 'front',
        img: HTML,
        description: [
            "Setting up setting up express servers with route handlers.",
            "Connecting RESTful APIs with sql databases for persistence.",
            "User authentication with JSON tokens or sessions. ",
            "Back-end app testing with Jest"
    
    ]
    },
    {
        skill: "CSS",
        end: 'front',
        img: CSS,
        description: [
            "Setting up setting up express servers with route handlers.",
            "Connecting RESTful APIs with sql databases for persistence.",
            "User authentication with JSON tokens or sessions. ",
            "Back-end app testing with Jest"
    
    ]
    },
    {
        skill: "JavaScript",
        end: 'front',
        img: JS,
        description: [
            "Creating and deploying back end restful APIs with node express",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
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
        skill: "MySql",
        end: 'back',
        img: MySQL,
        description: [
            "D",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },    
    {
        skill: "PostgreSql",
        end: 'back',
        img: PostgreSQL,
        description: [
            "Setting up setting up express servers with route handlers.",
            "Connecting RESTful APIs with sql databases for persistence.",
            "User authentication with JSON tokens or sessions. ",
            "Back-end app testing with Jest  "
    
    ]
    },

    {
        skill: "Mac OSX",
        end: 'os',
        img: OSX,
        description: [
            "D",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },

    {
        skill: "Windows10",
        end: 'os',
        img: Windows,
        description: [
            "D",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },

    {
        skill: "Linux",
        end: 'os',
        img: Linux,
        description: [
            "D",
            "Adding SQL databases and models for persistence",
            "Creating user authentication with JSON web tokens and sessions. ",
            "Testing back end applications with Jest"
    
    ]
    },
    {
        skill: " React Redux",
        end: 'front',
        img: Redux,
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
        <div 
        data-aos="fade-in" 
        data-aos-duration="600"
        data-aos-offset="300"
            id = 'Skills'>
            
            <h3 className="Main-h3"># Skills</h3>

            <div id = 'CardContainer'>
                <>
                 {/* 
                    <div>
                       GENERAL SKILLS 
                        {
                            skills.map((skill)=>{
                                if(skill.end == 'skill'){
                                    return(
                                    <div className = 'SkillCard'>
                                        <div className='img-con'>
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
                    */}
                    <div>
                        <h4>Operating Systems / Kernels</h4>
                        <div className="os-skills">
                        {
                            skills.map((skill)=>{
                                if(skill.end == 'os'){
                                    return(
                                    <div className = 'SkillCard'>
                                        <div className='img-con' >
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                    </div>
                                    )
                                }
                            })
                        }
                        </div>
                    </div>
                    <div>
                        <h4>Front-End</h4>
                        <div className="fe-skills">
                        {
                            skills.map((skill)=>{
                                if(skill.end == 'front'){
                                    return(
                                    <div className = 'SkillCard'>
                                        <div className='img-con'>
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                    </div>
                                    )
                                }
                            })
                        }
                        </div>

                    </div>
                    <div>
                        <h4>Back-End</h4>
                        <div className="be-skills">
                        {
                            skills.map((skill)=>{
                                if(skill.end == 'back'){
                                    return(
                                    <div className = 'SkillCard'>
                                        <div className='img-con'>
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                    </div>
                                    )
                                }
                            })
                        }
                        </div>
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