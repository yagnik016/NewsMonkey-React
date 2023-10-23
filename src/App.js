import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router,Route,Routes,useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


function AppRoutes(props) {
  const location = useLocation();

  return (
    <Routes key={location.pathname}>
      <Route path="/" element={<News  setProgress = {props.setProgress} pagesize={4} country="in" category="general" />} />
      <Route path="/business" element={<News  setProgress = {props.setProgress} pagesize={4} country="in" category="business" />} />
      <Route path="/entertainment" element={<News  setProgress = {props.setProgress} pagesize={4} country="in" category="entertainment" />} />
      <Route path="/general" element={<News  setProgress = {props.setProgress} pagesize={4} country="in" category="general" />} />
      <Route path="/health" element={<News  setProgress = {props.setProgress} pagesize={4} country="in" category="health" />} />
      <Route path="/science" element={<News  setProgress = {props.setProgress} pagesize={4} country="in" category="science" />} />
      <Route path="/sports" element={<News  setProgress = {props.setProgress} pagesize={4} country="in" category="sports" />} />
      <Route path="/technology" element={<News  setProgress = {props.setProgress} pagesize={4} country="in" category="technology" />} />
    </Routes>
  );
}


export default function App() {
const[progress,setProgress]=useState(0)
 
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <AppRoutes setProgress = {setProgress}/>
        </Router>
      </>
    );
  }
