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
        <h1>HELLO WORLD!</h1>
        {/* Header */}
        <header className="w3-container w3-red w3-center">
          <h1 className="w3-margin w3-jumbo">START PAGE</h1>
          <p className="w3-xlarge">Template by w3.css</p>
          <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</button>
        </header>

        {/* First Grid */}
        <div className="w3-row-padding w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-twothird">
              <h1>Lorem Ipsum</h1>
              <h5 className="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

              <p className="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="w3-third w3-center">
              <i className="fa fa-anchor w3-padding-64 w3-text-red"></i>
            </div>
          </div>
        </div>

        {/* Second Grid */}
        <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
          <div className="w3-content">
            <div className="w3-third w3-center">
              <i className="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
            </div>

            <div className="w3-twothird">
              <h1>Lorem Ipsum</h1>
              <h5 className="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

              <p className="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>

        <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
          <h1 className="w3-margin w3-xlarge">Quote of the day: live life</h1>
        </div>

        {/* Footer */}
        <footer className="w3-container w3-padding-64 w3-center w3-opacity">
          <div className="w3-xlarge w3-padding-32">
            <i className="fa fa-facebook-official w3-hover-opacity"></i>
            <i className="fa fa-instagram w3-hover-opacity"></i>
            <i className="fa fa-snapchat w3-hover-opacity"></i>
            <i className="fa fa-pinterest-p w3-hover-opacity"></i>
            <i className="fa fa-twitter w3-hover-opacity"></i>
            <i className="fa fa-linkedin w3-hover-opacity"></i>
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
