import React, { useEffect } from 'react'

import Python from '../../img/portfolioImg/python.png'
import NodeJS from '../../img/portfolioImg/node.png'
import PostgreSQL from '../../img/portfolioImg/postgresql.png'
import MySQL from '../../img/portfolioImg/mysql.png'
import react from '../../img/portfolioImg/react.svg'
import Redux from '../../img/portfolioImg/redux.svg'
import HTML from '../../img/portfolioImg/html.png'
import CSS from '../../img/portfolioImg/css.png'
import Flask from '../../img/portfolioImg/flask.png'
import JS from '../../img/portfolioImg/js.png'
import OSX from '../../img/portfolioImg/osx.png'
import Windows from '../../img/portfolioImg/win.png'
import Linux from '../../img/portfolioImg/linux.png'
import { init } from 'ityped'


export default function Skills() {
    
    useEffect(() => {
        
        const header = document.querySelector('#SkillsHeader')
        init(header, {
            cursorChar: '_',
            showCursor: true,
            loop: false,
            strings: [
                'My Stack'
            ]
        })

    }, [])

    return (
      <>
            <span id = 'SkillsHeader' className = 'Main-h3' ></span>

          <div 
            data-aos="fade-up" 
            data-aos-duration="600"
            data-aos-offset="200"
            id = 'Skills'>
            
            <div  id = 'CardContainer'>
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
                                    <div id = {skill.id}  className = 'SkillCard'>
                                        <div className='img-con' >
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                        <SkillHoverPane description = {description}/>
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
                                    <div id = {skill.id}  className = 'SkillCard'>
                                        <div className='img-con'>
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                        <SkillHoverPane description = {description}/>
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
                                    <div id = {skill.id} className = 'SkillCard'>
                                        <div className='img-con'>
                                            <img
                                            src={skill.img}
                                            alt=""/>
                                            <p>{skill.skill}</p>
                                        </div>
                                        <SkillHoverPane 
                                        description = {description}
                                        
                                        />
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
      </>
    )   
}

function SkillHoverPane(props){
    const { description } = props;

    console.log(description)
    return(
        <>

        </>
    )
}


const skills = [
    {
        id :1,
        skill: "Git",
        end: 'skill',
        img: 'https://drive.google.com/uc?id=1XZwPysnRZtGF2Prdpvs7q2uJdv8aLQc5',
        description: [
            "Adaptive to git commands and version control flow.",
            "Handling conflicts carefully and strategically",
    ]
    },    
    {
        id : 2,
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
        id : 3,
        skill: "Flask",
        end: 'back',
        img: Flask,
        description: [
            "Endpoint Security with Sessions and JWTs",
            "Database management with SQL Alchemy",

    
    ]
    },
    {
        id : 4,
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
        id : 5,
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
        id : 6,
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
        id : 7,
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
        id : 8,
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
        id : 9,
        skill: "MySQL",
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
        id : 10,
        skill: "PostgreSQL",
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
        id : 11,
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
        id : 12,
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
        id : 13,
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
        id : 14,
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

 
function description(arr){

    return(
        <ul className ='skill-list'>
            {arr.map((desc, index)=>{return <li> <span id="bullit">✶</span>   {desc}</li>})}
        </ul>
    )
}