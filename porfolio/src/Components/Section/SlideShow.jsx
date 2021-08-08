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
    deploy:'https://www.highgroundrestore.com',
    src:'https://github.com/e-licea/company/tree/master, https://github.com/e-licea/redux-teammanager-api',
    imgSrc: 'https://drive.google.com/uc?id=1fO0uTIUWbHLT9uucFNsmwkG4_JggXcq4',
    desc:'High Ground Restore is a simple front-end application for a starter roofing business. It\'s primary uses are for promoting roofing services, and educating possible clients on their own roof systems. The app was carefully built so it is concise and easy to manuever across all platforms through media queries. It also has an easy to use contact form that is able to send emails very easily to the companies inbox with EmailJS.',
    challenges: ['Creating branding from scratch.', 'Implementing a fully-functional contact form.'],
    technologies: ['React', 'Weather API', 'Google Cloud API', 'Less CSS']
  },
  {
    id: 1,
    project: 'Sneaker Tool',
    src:'https://github.com/e-licea/react-snkrz',
    imgSrc: 'https://drive.google.com/uc?id=18AG0dPF4HT1unHd9VUP15I1G63ut4uGk',
    desc:'This app is a sneaker tool. It is a small application keeps track of sneaker information. It has two main sections. One section (Upcoming) that keeps track of upcoming shoe releases by making asynchronous calls to the web every time pagination is changed. The back-end is engineered to scrape information on sneaker websites, so the information can be parsed to JSON to create an api. The second section (Home) has a quick search component that is able to search through a database of sneakers that will show users a custom profile on pretty much any popular sneaker anyone can think of.',
    challenges: ['Converting code to asynchronous methods.', 'Parsing HTML into readable JSON format.'],
    technologies: ['React', 'Cheerio', 'Node', 'Express', 'Google Cloud API', 'Less CSS']
  },
  {
    id: 2,
    project: 'Redux Team Collaborator',
    src:'https://github.com/e-licea/react-snkrz',
    deploy: 'https://dreamy-pare-fd4639.netlify.app/',
    imgSrc: 'https://drive.google.com/uc?id=1LR-PbXy6fcdFiKFVEUmToIR1JYjRPc9b',
    desc:'This project is a full-stack application. It is a team collaborator much like Slack or Discord. Users need to create an account to use the application. Once signed in, a user defaults with the rank of a \'Member\'. Members are able to message others individually, or they can create their own groups and collaborate amongst others. Users are also able to search through groups that they are able to join based on their rank. Admins and Moderators of the application will have more back-end privileges. The front-end of this application is build with React and it uses Redux for it\'s state management. The back-end is constructed with NodeJS and is able to keep data in persistance with a PostgreSQL database.',
    challenges: ['Redux state', 'Adding Auth with JSON web tokens', 'Creating a logical Postgres database schema', ],
    technologies: ['React', 'Redux', 'Node', 'Express', 'Google Cloud API', 'Less CSS', 'PostgreSQL'],
    currentlyWorking:['Creating user profile', 'update, add, and delete functionalities']
  }
]