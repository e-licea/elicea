import React, { useEffect, useState } from 'react';
import Render from './Components/Pages/Render'
import { keepTheme } from './Components/utils/Themes'
import { appContext } from './Components/Context/appContext'
import "animate.css/animate.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ToggleDarkMode from './Components/utils/ToggleDarkMode';
import Nav from './Components/Pages/Nav';
import { projects } from './Components/Pages/SlideShow';
// ..
AOS.init();


function App() {
  useEffect(() => {
    keepTheme()
  }, [])

  
  const [darkMode, setDarkMode] = useState(false);
  const [userLocation, setUserLocation]  = useState({});
  const [activeProject, setActiveProject ] = useState(projects[0]);
  const [projectLoading, setProjectLoading] = useState(false);
  const [articles, setArticles] = useState([])
  const [focusedArticle, setFocusedArticle] = useState({article_content: [], article_details:{}})
  const [location, setLocation] = useState({
    lon: '',
    lat: ''
  })


  return (
    <appContext.Provider value = {{
      darkMode: darkMode,
      setDarkMode: setDarkMode,
      location: location,
      setLocation: setLocation,
      userLocation: userLocation,
      setUserLocation: setUserLocation,
      activeProject: activeProject,
      setActiveProject: setActiveProject,
      projectLoading: projectLoading,
      setProjectLoading: setProjectLoading,
      articles: articles,
      setArticles: setArticles,
      focusedArticle: focusedArticle,
      setFocusedArticle: setFocusedArticle
    }}>
      <div  className="App" >
    
        <Nav/>
        <ToggleDarkMode/>
        <Render/>
    </div>
    </appContext.Provider>
  );
}

export default App;
