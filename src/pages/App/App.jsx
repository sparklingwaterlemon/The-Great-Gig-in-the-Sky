import './App.css'; // CSS
import { useEffect, useState } from "react"; // REACT
import MOONIMAGES from '../../assets/MOONIMAGES/0000index'; // IMAGES
import { Routes, Route } from "react-router-dom";

import MoonLandingPage from '../MoonLandingPage/MoonLandingPage'; // Page
import daysIntoYear from "../../utilities/DayDateFunction/DayDateFunction"; // Utilities
import SearchBar from '../../components/SearchBar/SearchBar'; // Component
import AboutPage from "../AboutPage/AboutPage";
import { getUser } from '../../utilities/Users-Services/Users-Services';
import AuthPage from '../AuthPage/AuthPage';
import ForumPage from '../ForumPage/ForumPage';





function App() {
  const [user, setUser] = useState(getUser());

  // // API weatherData for SearchBar
  const [weatherData, setWeatherData] = useState({});

  // // Date to xxx / 365 for MoonLandingPage
  let todayDate = new Date()
  let todayStringDate = daysIntoYear(todayDate) // returns a value between 1->365


  // // for Date Card
  const [displayDate, setDisplayDate] = useState("National Moon Day");
  const [changeDDIndex, setChangeDDIndex] = useState(0);
  const [curMoonPhase, setCurMoonPhase] = useState(MOONIMAGES[todayStringDate].position)

  // -- Date Card -- Date
  let dd = new Date()
  let changeDate = dd;

  // this function sets a new date, as today's date subtracted by how many frame indexes you scroll down(or up)
  function updateDate(index){
    dd.setDate(dd.getDate() - index)
    changeDate = dd.toLocaleDateString()

    setDisplayDate(changeDate)
  }

  // -- Date Card -- Moon Phase
  function updateMoonPhase(index){
    let scmp = MOONIMAGES[todayStringDate - index].position
    setCurMoonPhase(scmp)
  }

  // updateDate function with run when a new changeDDIndex is set in the MoonLandingPage
  // the changeDDIndex refers to the Frame Index you currently are on
  // the Frame Index changes the image and now, will change the corresponding date
  useEffect(()=>{
    updateDate(changeDDIndex);
    updateMoonPhase(changeDDIndex);
  },[changeDDIndex])
  

  

  return (
    <>
    { user ? 
    <>
    <Routes>
      <Route path="/" element={<MoonLandingPage 
            setChangeDDIndex={setChangeDDIndex} 
            displayDate={displayDate} 
            todayStringDate={todayStringDate}
            weatherData={weatherData} 
            setWeatherData={setWeatherData} 
            curMoonPhase={curMoonPhase}/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/forum" element={<ForumPage userInfo={user}/>} />
    </Routes>    
    </>
    :
    <AuthPage setUser={setUser}/>
    }
  </>
  );
}

export default App;
