import './App.css';
import {useState, useEffect, useRef } from "react"
import ParallaxEffect from '../ParallaxEffect/ParallaxEffect';
import LoadImageTest from '../LoadImageTest/LoadImageTest';

function App() {
  return (
    <main className="App">
      <ParallaxEffect />
      {/* <LoadImageTest /> */}
    </main>
  );
}

export default App;
