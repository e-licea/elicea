import React from 'react'

//imported skills
import node from '../../img/genImg/node.png';
import react from '../../img/genImg/react.svg';
import js from '../../img/genImg/javascript-39404.png';
import mysql from '../../img/genImg/mysql.svg';
import python from '../../img/genImg/python.png';
import redux from '../../img/genImg/redux.svg';

const skills = [node, react, js, mysql, python, redux ]


export default function Skills() {


    return (
        <div id = 'Skills'>
            <h3 className="Main-h3">Skills</h3>
            <div id = 'CardContainer'>
                {
                    skills.map( (skill)=>{
                        const logo = skill
                        return (
                            <div className = 'SkillCard'>
                                <img 
                                src={skill} 
                                alt=""/>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
