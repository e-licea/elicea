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
        active: this.state.active.id == 0? imgArr[0] : imgArr[this.state.active.id - 1],
      })
    }
    else {
      console.log('next')
      this.setState({
        active: this.state.active.id == 0? imgArr[0] : imgArr[this.state.active.id + 1],
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
    deploy:'https://www.highgroundrestore.com/',
    src:'https://github.com/e-licea/company/tree/master',
    imgSrc: 'https://drive.google.com/uc?id=1fO0uTIUWbHLT9uucFNsmwkG4_JggXcq4',
    desc:'High Ground Restore is a simple front-end application for a starter roofing business. It\'s primary uses are for promoting roofing services, and educating possible clients on roof systems. The React app was carefully built so it is concise and easy to manuever across all platforms. It also has an easy to use contact form to develop relationships with site visitors. A bonus weather widget can be found on the site to let users determine wether or not it is a good day to do some roof work.',
    challenges: ['Creating branding from scratch.', 'Implementing a fully-functional contact form.'],
    technologies: ['ReactJS', 'React Libraries', 'Google Cloud API', 'Less CSS']
  }
]