import React, { useContext } from 'react'
import { appContext } from '../Context/appContext'
//img
import images from '../utils/images'



export default function SlideShow(){

  

  const activeProject = useContext(appContext).activeProject
  const setActiveProject = useContext(appContext).setActiveProject
  const projectLoading  = useContext(appContext).projectLoading
  const setProjectLoading = useContext(appContext).setProjectLoading

  
  async function onClick(e){
    e.preventDefault();
    if (e.target.id != 'next'){
      //console.log('prev')
      setProjectLoading(true)
      setActiveProject(activeProject.id == 0? projects[2] : projects[activeProject.id - 1])
      setProjectLoading(false)

    }
    else {
      //console.log('next')
      setProjectLoading(true)
      setActiveProject(activeProject.id == 2? projects[0] : projects[activeProject.id + 1])
      setProjectLoading(false)
    }
  }


  return (
    <div id = 'SlideShow'>
      <div className="photo-container">
        <div 
          id = 'prev'
          onClick={onClick}>
          <img src = {images.previous} alt = 'previous'/>
        </div>
            {projectLoading? <img id = 'projectLoading' src = {images.loading} alt = ''/>: <ActiveImg activeProject = {activeProject}/>}
        <div 
          id = 'next'
          onClick={onClick}>
          <img src = {images.next} alt = 'next'/>
        </div>
      </div>

      <div className ='project-overview' key = {activeProject.id}>
        <h4>{activeProject.project}</h4>
        {
          activeProject.desc.map(p=>{
            return <p>{p}</p>
          })
        }
        <h6>Challenges...</h6>
        <ul>
        {activeProject.challenges.map(index=><li>{index}</li>)}
        </ul>
        <h6>Featured Technologies...</h6>
        <ul>
        {activeProject.technologies.map(index=><li>{index}</li>)}
        </ul>

        <span>Some repository sources may be private. Please fill out a contact form to request exclusive access!</span>
        {activeProject.deploy || activeProject.src? 
        <>
        <a target='_blank' href = {activeProject.src} className = 'button-48'><span className="text">Source</span></a>
        {
          activeProject.deploy?
          <a target='_blank'  href = {activeProject.deploy} className = 'button-48' ><span className="text">Deploy</span></a>
          :
          <p>Deploy will be available soon!</p>
        }
        </>
        :null}
        
      </div>
    </div>
  )

}

function ActiveImg(props){
  let { activeProject } = props


  return(
        <img 
          key = {activeProject.id}
          id = {activeProject.id} 
          src={activeProject.imgSrc}
          alt={activeProject.altImgSrc}
          deploy={ activeProject.deploy? activeProject.deploy: null} alt={activeProject.altImgSrc} 
          
          />
  )
}



export const projects = [

  // {
  //   id: 0,
  //   project: 'High Ground Restore',
  //   deploy:'https://www.highgroundrestore.com',
  //   src:'https://github.com/e-licea/company/tree/master, https://github.com/e-licea/redux-teammanager-api',
  //   imgSrc: images.hgrMockup,
  //   desc:[
  //     'High Ground Restore is a roofing start up that is continuously growing. I work closely with the company CEO to make sure this project is tailored for what High Ground Restore needs. Upon a consultation, I found out that High Ground Restore aims to not only provide services to their community, but educate them as well. This is why I was able to build branding from scratch to really capture their personality and the character they want to portray.',
  //     'This application was built with ReactJS, but was recently migrated to NextJS for better SEO optimization. The migration entails shrinking images to their corresponding viewport to fetch images faster, dynamic page titles, meta descriptions for search engines, and much more. The site\'s SEO is constantly being monitored, tested, and changed to keep up with competitors in the Chicagoland area.',
  //     'In addition, the application has it\'s own back-end that will service articles to visitors through it\'s own api. The api is a Flask server, which is built as a blog manager. You can read more about how this api works in detail by finding the `Flask Blog Manager Project` in this page.',
  //     'Visit this project in it\'s entirety with the deploy link below! '
    
  //   ],
  //   challenges: ['Brand Creation', 'NextJS Migration', 'Setting up Flask Server'],
  //   technologies: ['React', 'NextJS', 'Flask', 'Weather API', 'Less CSS', 'Context API'],
  //   currentlyWorking: ['SEO Implementation','Content Creation', 'Selling Ad Space']
  // },
  {
    id: 0,
    project: 'Sneaker Tool',
    src:'https://github.com/e-licea/react-snkrz',
    imgSrc: images.reactSnkrsMockup,
    desc:[
      'This app is a sneaker tool that is made for the most passionate sneaker fanatics. It\'s intent is to serve exclusive information that will help sneaker fanatics prepare for their next anticipated shoe release. It serves information such as retail pricing, release dates, colorways, and even a prediction on what sneaker organizations will be releasing which shoe. Even when no sneaker releases are taking place, users are still able to take advantage of the large sneakerpedia that this sneaker tool offers. A database is able to serve insights on almost any sneaker that is searched by the user. The convenience of such a tool can come in handy for people who make hustles from shoe resales or simply just to pull up a sneaker information to show a friend.'
    ],
    deploy: 'https://sneakers-app.vercel.app/',
    challenges: ['Web Scraping and parsing information to JSON with async'],
    technologies: ['React', 'Cheerio', 'Node', 'Express',  'Less CSS'],
    currentlyWorking: ['Deploying on a server with multiple open ports']
  },
  {
    id: 1,
    project: 'The Social Platform',
    src:'https://github.com/e-licea/react-snkrz',
    deploy: 'https://dreamy-pare-fd4639.netlify.app/',
    imgSrc: images.rTeamMockup,
    desc:[
      'The idea behind the Social Platform was creating a workspace much like Slack and Facebook. My inspiration behind this idea was to take "productive" from slack and the "entertaintment" from Facebook to create a hybrid of both.',
      'Social Platform\'s messenger features resemble Slack to provide productivity among users in a workzone, while also having a staus feed that is inspired by facebook so that users can keep up with one another. Users can have own profiles, private workzones, to have fun while also getting things done no matter what activity they are using the application for!',

      'Although this application uses multiple technologies the two main ones are Redux, and Socket IO. Redux was a fundamental technology for this application to manage multiple states at once. I have found it to be extremely useful and has definitely served as an optimizer for the application. SocketIO was just recently implented into this application because I had discovered that the application was updating in real time without reloading the page. Currently, a lot of the original back-end endpoints are being switched to sockets for this reason, and also so the server takes less requests in hopes to on day have a large amount of users.',
      'Check out how long this application has come by visitng the deploy link below!'
  ],
    challenges: ['Migrating to a socket server', 'Creating a logical and minimal Postgres database schema' ],
    technologies: ['React', 'Redux', 'Node', 'SocketIO', 'Yup Form Validator', 'Express', 'Less CSS', 'PostgreSQL'],
    currentlyWorking:['Real-time application updates with sockets', 'Implementing Emojis globally', 'Implementing additional CRUD features.']
  },
  {
    id: 2,
    project: 'Flask Blog Manager',
    src:'https://github.com/e-licea/highgroundrestoreapi',
    deploy: 'https://highgroundrestoreapi.herokuapp.com/login',
    imgSrc: images.articleManagerMockup,
    desc:['This Flask application was designed for managing and creating content for a blog website. The blog manager has protected endpoints with Flask sessions that require the proper credentials for write privileges inside the app. Once logged in, a user is able to create drafts, add content such as paragraphs and images, and then publish the article. When the article is published, it is immediately available to be read through the client api endpoints.'],
    challenges: ['Authentication with Flask Sessions','Serializing data to JSON', 'Creating a logical Postgres database schema' ],
    technologies: ['Flask', 'Vanilla JS', 'DJango HTML', 'SQL Alchemy',  'Less CSS', 'PostgreSQL'],
    currentlyWorking:['Adding additional edit functions']
  }
]//