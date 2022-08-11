import React, { useState } from 'react'
import Navbar from './Components/Navbar.js';
import News from './Components/News.js';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {

  const apiKey = process.env.REACT_APP_APIKEY;

  const [progress, setProgress] = useState(0);

  const updateProgress = (progress) => {
    setProgress(progress);
  }

  return (
    <div >
      <LoadingBar
        color='#f7f7f7'
        progress={progress}
      />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News apiKey={apiKey} progress={updateProgress} pageSize="18" country="in" category="general" key="general" />} />
        <Route exact path="/business" element={<News apiKey={apiKey} progress={updateProgress} pageSize="18" country="in" category="business" key="business" />} />
        <Route exact path="/entertainment" element={<News apiKey={apiKey} progress={updateProgress} pageSize="18" country="in" category="entertainment" key="entertainment" />} />
        <Route exact path="/sport" element={<News apiKey={apiKey} progress={updateProgress} pageSize="18" country="in" category="sport" key="sport" />} />
        <Route exact path="/science" element={<News apiKey={apiKey} progress={updateProgress} pageSize="18" country="in" category="science" key="science" />} />
        <Route exact path="/technology" element={<News apiKey={apiKey} progress={updateProgress} pageSize="18" country="in" category="technology" key="technology" />} />
      </Routes>
    </div>
  )

}


