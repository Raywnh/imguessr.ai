import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import React, { useRef, useState } from 'react';

function App() {
  // Fetch image url and render it 
  const [image, setImage] = useState("");
  const inputRefAnswer = useRef();

  return (
    <div className="App">
      <div className="image-container">
        <Image image={image} onSubmit={onSubmit} inputRefAnswer={inputRefAnswer}></Image>
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
