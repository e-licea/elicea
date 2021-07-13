import React, { Component } from 'react'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom';


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
          {this.state.active.deploy && this.state.active.src? 
          <>
          <a target='_blank' href = {this.state.active.src}>Source</a>
          <a target='_blank' href = {this.state.active.deploy}>Deployed here.</a>
          </>
          :null}
          
        </div>
      </div>
    )
  }
}


function ActiveImg(props){

  let { active } = props
  const styles = useSpring({
    config: {delay: 10000, duration: 100},
    to: async (next, cancel) => {
      await next({ opacity: '0', marginTop: '800px' })
      await next({ opacity: '1', marginTop: '0px' })
      cancel()
    },
    from:{ opacity: '0', marginTop: '800px' }
  })

  return(
      <animated.div  style= {styles}>
        <img id = {active.id} src={active.imgSrc} deploy={ active.deploy? active.deploy: null} alt="" />
      </animated.div>
  )
}



const imgArr = [

  {
    id: 0,
    project: 'High Ground Restore',
    deploy:'https://www.highgroundrestore.com/',
    src:'https://github.com/e-licea/company/tree/master',
    imgSrc: 'https://drive.google.com/uc?id=1fO0uTIUWbHLT9uucFNsmwkG4_JggXcq4',
    desc:'High Ground Restore is a simple front-end application for a starter roofing business. It\'s primary uses are for promoting roofing services, and educating possible clients on roof systems. The React app was carefully built so it is concise and easy to manuever across all platforms. It also has an easy to use contact form to develop relationships with site visitors. A bonus weather widget can be found on the site to let users determine wether or not it is a good day to do some roof work.',
    challenges: ['Creating branding from scratch.', 'Implementing a fully-functional contact form.'],
    technologies: ['ReactJS', 'React Libraries', 'Google Cloud API', 'Less CSS']
  },   
  {
    id: 1,
    project: 'Sauti African Market',
    imgSrc: 'https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg',
    deploy: 'https://front-end-git-main-alan-and-mark.vercel.app/itemlist',
    src: 'https://github.com/Build-Week-African-Marketplace-tt174/back-end',
    desc:'This was another collaborative project I worked on with a team. My role in this project was the back-end. We created endpoints for an application designed to sell items across different companies. A visitor can browse and buy items listed from different companies. Once a company has registered on the site, they have the ability to list their items for sale and add new items to their inventory. The application provides authentication as well as testing with Jest.js',
    challenges: ['Creating different database environments for testing and production', 'Establishing sessions', 'Creating reuseable auth middleware for protected endpoints'],
    technologies: ['NodeJS', 'KnexJS', 'JestJS']
  },
  {
    id: 2,
    project: 'Cannabis Strain Finder',
    imgSrc: 'https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg',
    deploy: 'https://bwmedcabinet4.netlify.app/',
    src: 'https://github.com/BuildWeek-Med-Cabinet-4/front-end',
    desc: 'This application was one of my first collaborative builds with a team. My focus was the front-end. This application serves as a guide to helping patients find strains for medicinal cannabis use. A user is able to browse through pages of different strains, provided from the back-end, each of which provides information and demographics on a strain such as: effects, indications, and where to buy the strain. A user can even make use of the strain finder, which is a tool that allows users to input effects to get a custom recommended strain. When a user creates an account, they get full access to the app which allows them to save their strains in persistence.',
    challenges: ['Implementing pagination'],
    technologies: ['React', 'React Libraries', 'Less CSS']
  }
]