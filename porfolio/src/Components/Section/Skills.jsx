import React from 'react'


const skills = [
    {
        skill: "PostgreSql",
        end: 'db',
        img: 'https://drive.google.com/uc?id=14pQLaTTiy67h49lhaq5AcZkt1mfPPiSY',
        description: [
            "Setting up setting up express servers with route handlers.",
            "Connecting RESTful APIs with sql databases for persistence.",
            "User authentication with JSON tokens or sessions. ",
            "Back-end app testing with Jest  "
    
    ]
    },
    {
        skill: "Git",
        end: 'skill',
        img: 'https://drive.google.com/uc?id=1XZwPysnRZtGF2Prdpvs7q2uJdv8aLQc5',
        description: [
            "Adaptive to git commands and version control flow.",
            "Handling conflicts carefully and strategically",
    ]
    },
    {
        skill: "NodeJS",
        end: 'back',
        img: 'https://drive.google.com/uc?id=1AnMDvTV_iM_O53ZzUBYQ3CdkU9ErSofk',
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
        img: 'https://drive.google.com/uc?id=1AnMDvTV_iM_O53ZzUBYQ3CdkU9ErSofk',
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
        img: 'https://drive.google.com/uc?id=13bQU7v5XupVbNkmtb6GE7Wm03Uws75m7',
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
        img: 'https://drive.google.com/uc?id=1G97E4lCCU4ZyYZWTUq4CuU88-bMG1fH7',
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
        img: 'https://drive.google.com/uc?id=1fTphCmnvi2z2j07oAtUb_yhxZ6GosYWc',
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
        img: 'https://drive.google.com/uc?id=1MOTxYJzHEhz36D4rVr7du70umvT-IH0F',
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
                        <h4>Front End</h4>
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
                        <h4>Database</h4>
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
                        <h4>Back End</h4>
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