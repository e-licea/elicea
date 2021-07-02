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
  
  componentDidMount(){
    console.log(this.state)
    setInterval(()=>{
      this.setState({
        active: this.state.active.id == 4? imgArr[0] : imgArr[this.state.active.id + 1],
      })
    }, 10000)
  }



  onClick(e){
    e.preventDefault();
    if (e.target.id != 'next'){
      console.log('prev')
      this.setState({
        active: this.state.active.id == 0? imgArr[4] : imgArr[this.state.active.id - 1],
      })
    }
    else {
      console.log('next')
      this.setState({
        active: this.state.active.id == 4? imgArr[0] : imgArr[this.state.active.id + 1],
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

        <div>
          <h3>{this.state.active.project}</h3>
          <p>
            {this.state.active.desc}
          </p>
        </div>
      </div>
    )
  }
}


function ActiveImg(props){

  let { active } = props
  const styles = useSpring({
    config: {delay: 10000, duration: 400},
    to: async (next, cancel) => {
      await next({ opacity: '0', marginTop: '800px' })
      await next({ opacity: '1', marginTop: '0px' })

    },
    from:{ opacity: '0', marginTop: '800px' }
  })

  return(
      <animated.div  style= {styles}>
        <img id = {active.id} src={active.imgSrc} alt="" />
      </animated.div>
  )
}



const imgArr = [
  {
    id: 0,
    project: 'Audio Visualizer with Web Audio API',
    imgSrc: 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',
    desc:'the id is 0'
  },  
  {
    id: 1,
    project: 'High Ground Restore',
    imgSrc: 'https://media.istockphoto.com/photos/the-african-king-picture-id492611032?k=6&m=492611032&s=612x612&w=0&h=Y_CHJCbkFOqmXvHOYSdxu0T5UZqoRj7OzpIBLGkvf_Q=',
    desc:'the id is 1'
  },  
  {
    id: 2,
    project: 'Python Trader Bot with Ameritrade API',
    imgSrc: 'https://cdn.eso.org/images/thumb300y/eso1322a.jpg',
    desc:'the id is 2'
  },  
  {
    id: 3,
    project: 'Spotify Song Suggester',
    imgSrc: 'https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg',
    desc:'the id is 3'
  },
  {
    id: 4,
    project: 'Cannibis Strain Finder',
    imgSrc: 'https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg',
    desc:'the id is 4'
  }
]