import React, { Component } from 'react'

//img
import images from '../utils/images'


export default class SlideShow extends Component {

  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      active : imgArr[0],
      imgArr: imgArr,
    }
    this.onClick = this.onClick.bind(this);
  }

  // componentDidMount(){
  //   console.log(this.state)
  //   setInterval(()=>{
  //     this.setState({
  //       active: this.state.active.id == 2? imgArr[0] : imgArr[this.state.active.id + 1],
  //     })
  //   }, 10000)
  // }


  onClick(e){
    e.preventDefault();
    if (e.target.id != 'next'){
      //console.log('prev')
      this.setState({
        active: this.state.active.id == 0? imgArr[3] : imgArr[this.state.active.id - 1],
      })
    }
    else {
      //console.log('next')
      this.setState({
        active: this.state.active.id == 3? imgArr[0] : imgArr[this.state.active.id + 1],
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
          <a target='_blank' href = {this.state.active.src} className = 'button-48'><span className="text">Source</span></a>
          <a target='_blank' href = {this.state.active.deploy} className = 'button-48' ><span className="text">Deploy</span></a>
          </>
          :null}
          
        </div>
      </div>
    )
  }
}


function ActiveImg(props){
  console.log(props)
  let { active, handleImageErrored, handleImageLoaded} = props


  return(
        <img 
          id = {active.id} 
          src={active.imgSrc}
          alt={active.altImgSrc}
          deploy={ active.deploy? active.deploy: null} alt={active.altImgSrc} 
          
          />
  )
}



export const imgArr = [

  {
    id: 0,
    project: 'High Ground Restore',
    deploy:'https://www.highgroundrestore.com',
    src:'https://github.com/e-licea/company/tree/master, https://github.com/e-licea/redux-teammanager-api',
    imgSrc: images.hgrMockup,
    desc:'High Ground Restore is a roofing start up that is continuously growing. It aims to build strong branding from scratch that is built upon education and community. It is a front-end React application that utilizes NextJS framework for better SEO analytics. High Ground Restore is not just a company that offers roofing services, but also roofing education through it\'s wide variety of articles that are served through their back-end API that is made with Flask. This application was built with a long-term marketing goal to be able to serve customers to their satisfaction as well as keeping them updated on the topic of roofing.',
    challenges: ['Brand Creation', 'NextJS Migration', 'Setting up Flask Server'],
    technologies: ['React', 'NextJS', 'Flask', 'Weather API', 'Less CSS', 'Context API'],
    currentlyWorking: ['SEO Implementation','Content Creation', 'Selling Ad Space']
  },
  {
    id: 1,
    project: 'Sneaker Tool',
    src:'https://github.com/e-licea/react-snkrz',
    imgSrc: images.reactSnkrsMockup,
    desc:'This app is a sneaker tool that is made for the most passionate sneaker fanatics. It\'s intent is to serve exclusive information that will help sneaker fanatics prepare for their next anticipated shoe release. It serves information such as retail pricing, release dates, colorways, and even a prediction on what sneaker organizations will be releasing which shoe. Even when no sneaker releases are taking place, users are still able to take advantage of the large sneakerpedia that this sneaker tool offers. A database is able to serve insights on almost any sneaker that is searched by the user. The convenience of such a tool can come in handy for people who make hustles from shoe resales or simply just to pull up a sneaker information to show a friend.',
    challenges: ['Web Scraping and parsing information to JSON with async'],
    technologies: ['React', 'Cheerio', 'Node', 'Express',  'Less CSS'],
    currentlyWorking: ['Deploying on a server with multiple open ports']
  },
  {
    id: 2,
    project: 'Redux Social Platform',
    src:'https://github.com/e-licea/react-snkrz',
    deploy: 'https://dreamy-pare-fd4639.netlify.app/',
    imgSrc: images.rTeamMockup,
    desc:'This project is a social platform much like slack or discord. The inspiration behind it was to create an app that encourages group productivity through social media. The app offers group messaging where users can create channels and add members to them. Each member holds a rank that will allow or disallow for admin functionalities such as adding or removing people from an existing group. Users are also able to unsend or edit messages if they needed to. In an attempt to make the application more engaging, an emoji system has been implemented along with a status feed (much like facebook\'s wall)currently in the works. The app can be tested with username: Tony and password: password',
    challenges: ['Redux state', 'Authentication with JSON Web Tokens','Creating a reliable emoji api', 'Creating a logical Postgres database schema' ],
    technologies: ['React', 'Redux', 'Node','Yup Form Validator', 'Express', 'Less CSS', 'PostgreSQL'],
    currentlyWorking:['Creating user profile', 'Setting up a status feed page.']
  },
  {
    id: 3,
    project: 'Flask Blog Manager',
    src:'https://github.com/e-licea/highgroundrestoreapi',
    deploy: 'https://highgroundrestoreapi.herokuapp.com/login',
    imgSrc: images.articleManagerMockup,
    desc:'This Flask application was designed for managing and creating content for a blog website. The blog manager has protected endpoints with Flask sessions that require the proper credentials for write privileges inside the app. Once logged in, a user is able to create drafts, add content such as paragraphs and images, and then publish the article. When the article is published, it is immediately available to be read through the client api endpoints.',
    challenges: ['Authentication with Flask Sessions','Serializing data to JSON', 'Creating a logical Postgres database schema' ],
    technologies: ['Flask', 'Vanilla JS', 'DJango HTML', 'SQL Alchemy',  'Less CSS', 'PostgreSQL'],
    currentlyWorking:['Adding additional edit functions']
  }
]//