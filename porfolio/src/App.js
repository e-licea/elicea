import React, { useEffect, useState } from 'react';
import Render from './Components/Pages/Render'
import { keepTheme } from './Components/utils/Themes'
import { appContext } from './Components/Context/appContext'
import "animate.css/animate.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ToggleDarkMode from './Components/utils/ToggleDarkMode';
import Nav from './Components/Pages/Nav';
// ..
AOS.init();


function App() {
  useEffect(() => {
    keepTheme()
  }, [])


  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState({
    lon: '',
    lat: ''
  })

  return (
    <appContext.Provider value = {{
      darkMode: darkMode,
      setDarkMode: setDarkMode,
      location: location,
      setLocation: setLocation
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
