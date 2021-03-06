import React from 'react'


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
        skill: "HTML",
        end: 'front',
        img: 'https://drive.google.com/uc?id=1bMowbcmamCaOtW7QSMNat5E2ekYPBsTc',
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
        img: 'https://drive.google.com/uc?id=1oD2Vta5BIfuevMf6WINjkd966zYqiC6Q',
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
        img: 'https://drive.google.com/uc?id=13bQU7v5XupVbNkmtb6GE7Wm03Uws75m7',
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
        img: 'https://drive.google.com/uc?id=1Os9iSrisdY138k3DwxKeCIbO_aoWJwVZ',
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
        img: 'https://drive.google.com/uc?id=1I-dL0bosBKwooPJlz8e7YiKj1rhcYro-',
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
        img: 'https://drive.google.com/uc?id=14pQLaTTiy67h49lhaq5AcZkt1mfPPiSY',
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
        img: 'https://drive.google.com/uc?id=1VWhmdkQ6YmhkslFRt78B133z6zEelRWa',
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
        img: 'https://drive.google.com/uc?id=1A9CmHJRFKYx-MOyKtBQaN0KX9sN2kl6k',
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
        img: 'https://drive.google.com/uc?id=1A0ykVzN7X0M7a8XySQhJNRx8NYSpE1Qi',
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