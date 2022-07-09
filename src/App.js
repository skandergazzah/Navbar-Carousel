import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Slider from "./components/Slider/Slider";
import img1 from './slider1.jpg'
import img2 from './slider2.jpg'

const slideData = [
    {
      index: 0,
      headline: 'kITE-SURF',
      button: 'Shop now',
      src: img1
    },
    {
      index: 1,
      headline: 'WIND-SURF',
      button: 'Nos événements',
      src: img2
    }
  ]
function App(){
    return(
    <div className="App">
          <Navbar />
          <Slider heading="Example Slider" slides={slideData} />

    </div>
    )
}

export default App;