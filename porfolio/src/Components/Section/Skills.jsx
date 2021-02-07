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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem illo facilis adipisci placeat nulla, quod deserunt excepturi sit. Exercitationem iste necessitatibus eveniet minima dolorum, dolorem aliquam nobis distinctio sequi."
    },
    {
        skill: "ReactJS",
        img: react,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem illo facilis adipisci placeat nulla, quod deserunt excepturi sit. Exercitationem iste necessitatibus eveniet minima dolorum, dolorem aliquam nobis distinctio sequi."
    },
    {
        skill: "JavaScript",
        img: js,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem illo facilis adipisci placeat nulla, quod deserunt excepturi sit. Exercitationem iste necessitatibus eveniet minima dolorum, dolorem aliquam nobis distinctio sequi."
    },
    {
        skill: "MySql",
        img: mysql,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem illo facilis adipisci placeat nulla, quod deserunt excepturi sit. Exercitationem iste necessitatibus eveniet minima dolorum, dolorem aliquam nobis distinctio sequi."
    },
    {
        skill: "Python",
        img: python,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem illo facilis adipisci placeat nulla, quod deserunt excepturi sit. Exercitationem iste necessitatibus eveniet minima dolorum, dolorem aliquam nobis distinctio sequi."
    },
    {
        skill: " React Redux",
        img: redux,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem illo facilis adipisci placeat nulla, quod deserunt excepturi sit. Exercitationem iste necessitatibus eveniet minima dolorum, dolorem aliquam nobis distinctio sequi."
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
                        console.log(logo.img)
                        return (
                            <div className = 'SkillCard'>
                                <img 
                                src={skill.img} 
                                alt=""/>
                                <p>{skill.skill}</p>
                                <p>{skill.description}</p>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
