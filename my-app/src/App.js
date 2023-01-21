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
          <button className="button black padding-large large margin-top">Get Started</button>
          <button className="button black padding-large large margin-top">Get Started</button>
          <button className="button black padding-large large margin-top">Get Started</button>
        </header>

        {/* First Grid */}
        <div className="row-padding padding-64 container">
          <div className="content">
            <div className="twothird">
              <h1>Lorem Ipsum</h1>
              <h5 className="padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

              <p className="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="third center">
              <i className="fa fa-anchor padding-64 text-red"></i>
            </div>
          </div>
        </div>

        {/* Second Grid */}
        <div className="row-padding light-grey padding-64 container">
          <div className="content">
            <div className="third center">
              <i className="fa fa-coffee padding-64 text-red margin-right"></i>
            </div>

            <div className="twothird">
              <h1>Lorem Ipsum</h1>
              <h5 className="padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

              <p className="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
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
