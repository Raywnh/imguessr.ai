import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import React, { useRef, useState } from 'react';

function App() {
  // Fetch image url and render it 
  const [image, setImage] = useState("");
  const inputRefAnswer = useRef();

  return (
    <div>
      {/* Header */}
      <header className="container red center">
        <h1 className="margin jumbo">IMGUESSR.io</h1>
        <p className="xlarge">Choose your difficulty:</p>
        <button className="button dark-yellow padding-large large margin-top">Normal</button>
        <button className="button dark-yellow padding-large large margin-top">Extremely Hard</button>
      </header>

      {/* First Grid */}
      <div className="row-padding padding-64 container">
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

          <div className="third center">
            <i className="fa fa-anchor padding-64 text-red"></i>
          </div>
        </div>

        <div className="container black center opacity padding-64">
          <h1 className="margin xlarge">Quote of the day: live life</h1>
        </div>

        {/* Footer */}
        <footer className="container padding-64 center opacity">
          <div className="xlarge padding-32">
            <i className="fa fa-facebook-official hover-opacity"></i>
            <i className="fa fa-instagram hover-opacity"></i>
            <i className="fa fa-snapchat hover-opacity"></i>
            <i className="fa fa-pinterest-p hover-opacity"></i>
            <i className="fa fa-twitter hover-opacity"></i>
            <i className="fa fa-linkedin hover-opacity"></i>
          </div>
          <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        </footer>
      </div>
     
    </div>
  );

  function onSubmit() {
    const answer = inputRefAnswer.current.value;

    // Fetch the correct answer from backend 

    //
  }
}

export default App;
