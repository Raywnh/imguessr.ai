import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import React, { useRef, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Game from './Game'

function App() {
  // Fetch image url and render it 
  const [image, setImage] = useState("");
  const inputRefAnswer = useRef();
  const [pages, setPages] = useState(0)

  return (
      <div>
      {/* Header */}
      <header className="container red center">
        <h1 className="margin jumbo">IMGUESSR.io</h1>
        <p className="xlarge">Choose your difficulty:</p>
        <button className="button dark-yellow padding-large large margin-top"
        id="normalButton" onClick={goToNormal}>Normal</button>
        <button className="button dark-yellow padding-large large margin-top">Extremely Hard</button>
      </header>

      {/* First Grid */}
      {pages == 0? <div className="row-padding padding-64 container">
          <div className="content">
            <div className="twothird">
              <h1>Difficulties Explained</h1>
              <h5 className="padding-32">Normal - a 1 word prompt for fun, easy, and stress free gameplay</h5>
              <h5 className="padding-32">Extremely Hard - a 2 word prompt that is completely random. For the brave.</h5>
              <p className="text-grey">
                Welcome to IMGUESSR.IO, a game that utilizes the DALL-E 2 By OpenAI to generate random images for you to guess.
                All difficulties give you 60 seconds to guess the image, with new images being added every 15 seconds for extra help.
                Guess the prompt in 60 seconds to win!
              </p>
            </div>
        </div>       
        {/* Footer */}
        <footer className="container padding-64 center opacity">
          <p>
            Made by <a href="https://github.com/rayzhou4" target="_blank">Ray Z</a> · <a href="https://github.com/Raywnh" target="_blank">Ray H</a> · <a href="https://github.com/migies12"  target="_blank">Miguel M</a> · <a href="https://github.com/AndyJLi0"  target="_blank">And L</a>
          </p>
        </footer>
      </div>:<Game></Game>}
      
      </div>
    
  );
  function goToNormal() {
    setPages(1)
  }
  function onSubmit() {
    const answer = inputRefAnswer.current.value;

    // Fetch the correct answer from backend 

    //
  }
}

export default App;
