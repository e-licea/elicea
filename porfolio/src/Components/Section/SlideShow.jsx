import React, { Component } from 'react'
import { useSpring, animated } from 'react-spring'


export default class SlideShow extends Component {


  constructor(props){
    super(props)
    this.state = {
      active : imgArr[0],
      imgArr: imgArr,
    }
    this.onClick = this.onClick.bind(this);
  }


  componentWillMount(){
    console.log('The component will now mount')

  }
  
 // componentDidMount(){
  //  console.log(this.state)
  //  setInterval(()=>{
 //     this.setState({
//        active: this.state.active.id == 4? imgArr[0] : imgArr[this.state.active.id + 1],
 //     })
//    }, 10000)
//  }



  onClick(e){
    e.preventDefault();
    if (e.target.id != 'next'){
      console.log('prev')
      this.setState({
        active: this.state.active.id == 0? imgArr[2] : imgArr[this.state.active.id - 1],
      })
    }
    else {
      console.log('next')
      this.setState({
        active: this.state.active.id == 2? imgArr[0] : imgArr[this.state.active.id + 1],
      })
    }
    
  }


  render() {
    return (
      <div id = 'SlideShow'>
        <div className="photo-container">
          <div 
            id = 'prev'
            onClick={this.onClick}
            ></div>
              <ActiveImg active = {this.state.active}/>

          <div 
            id = 'next'
            onClick={this.onClick}
            ></div>

        </div>

        <div className ='project-overview'>
          <h4>{this.state.active.project}</h4>
          <p>
            {this.state.active.desc}
          </p>
          <h6>Challenges...</h6>
          <ul>
          {this.state.active.challenges.map(index=><li>{index}</li>)}
          </ul>
          <h6>Featured Technologies...</h6>
          <ul>
          {this.state.active.technologies.map(index=><li>{index}</li>)}
          </ul>
          {this.state.active.deploy || this.state.active.src? 
          <>
          <a target='_blank' href = {this.state.active.src}>Source</a>
          <a target='_blank' href = {this.state.active.deploy}>Deploy</a>
          </>
          :null}
          
        </div>
      </div>
    )
  }
}


function ActiveImg(props){

  let { active } = props

  const springs = useSpring({
    config: {delay: 10000, duration: 100},
    to:{opacity: 1}, from: {opacity: 0}
  })

  return(
      <animated.div  style= {springs}>
        <img id = {active.id} src={active.imgSrc} deploy={ active.deploy? active.deploy: null} alt="" />
      </animated.div>
  )
}



const imgArr = [

  {
    id: 0,
    project: 'High Ground Restore',
    deploy:'https://dreamy-pare-fd4639.netlify.app/',
    src:'https://github.com/e-licea/company/tree/master, https://github.com/e-licea/redux-teammanager-api',
    imgSrc: 'https://drive.google.com/uc?id=1fO0uTIUWbHLT9uucFNsmwkG4_JggXcq4',
    desc:'High Ground Restore is a simple front-end application for a starter roofing business. It\'s primary uses are for promoting roofing services, and educating possible clients on roof systems. The React app was carefully built so it is concise and easy to manuever across all platforms. It also has an easy to use contact form to develop relationships with site visitors. A bonus weather widget can be found on the site to let users determine wether or not it is a good day to do some roof work.',
    challenges: ['Creating branding from scratch.', 'Implementing a fully-functional contact form.'],
    technologies: ['ReactJS', 'React Libraries', 'Google Cloud API', 'Less CSS']
  },
  {
    id: 1,
    project: 'React Sneakers',
    src:'https://github.com/e-licea/react-snkrz',
    imgSrc: 'https://drive.google.com/uc?id=18AG0dPF4HT1unHd9VUP15I1G63ut4uGk',
    desc:'React Sneakers is a small personal project that keeps track of sneaker information. It has two main sections. One section (Upcoming) that keeps track of upcoming shoe releases. It relies on a Node back-end api that scrapes sneaker websites for information, it then parses the information into JSON format, once in JSON format, it can provide information into the front-end. The second section (Home) has a quick search component that is able to search through a database of sneakers that will show users a custom profile on any sneaker that is searched.',
    challenges: ['Converting code to asynchronous methods.', 'Parsing HTML into readable JSON format.'],
    technologies: ['ReactJS', 'NodeJS', 'Express', 'Google Cloud API', 'Less CSS']
  },
  {
    id: 2,
    project: 'Redux Team Collaborator',
    src:'https://github.com/e-licea/react-snkrz',
    imgSrc: 'https://drive.google.com/uc?id=1LR-PbXy6fcdFiKFVEUmToIR1JYjRPc9b/view?usp=sharing',
    desc:'This project is another full-stack application. It is a team collaborator messenger much like Slack or Discord. The front-end is build with React and it uses Redux for state management since it is designed to be a larger application. The back-end is constructed with NodeJS and is able to keep data in persistance with a PostgreSQL database.',
    challenges: ['Organizing Redux state', 'Authenticating entire application with JSON web tokens', 'Setting up Postgres database schema', ],
    technologies: ['ReactJS', 'Redux', 'NodeJS', 'Express', 'Google Cloud API', 'Less CSS', 'PostgreSQL']
  }
]