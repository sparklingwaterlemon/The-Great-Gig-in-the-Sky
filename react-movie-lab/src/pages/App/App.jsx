import './App.css';
import {useState, useEffect, useRef } from "react"
import ParallaxEffect from '../ParallaxEffect/ParallaxEffect';

// testing components
// load image test
import LoadImageTest from '../Test-LoadImageTest/LoadImageTest';
// fetch api test


function App() {
  return (
    <main className="App">
      <ParallaxEffect />
      {/* <LoadImageTest /> */}
    </main>
  );
}

export default App;
