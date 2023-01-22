import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";
import React, { useRef, useState } from "react";
import Game from "./Game";

function App() {
  // Fetch image url and render it 
  const [imageData, setImageData] = useState({});
  const inputRefAnswer = useRef();
  const [pages, setPages] = useState(0)
 
  return (
    <div>
      {/* Header */}
      <header className="container green center">
        <img src={require('./assets/imguessr-header-banner.png')} alt="The banner of the website" />
        <p className="xlarge">Choose your difficulty:</p>
        <button
          className="button dark-yellow padding-large large margin"
          id="normalButton"
          onClick={goToNormal}
        >
          Normal
        </button>
        <button className="button dark-yellow padding-large large margin" onClick={goToHard}>
          Extremely Hard
        </button>
      </header>

      {/* First Grid */}
      {pages === 0 ? (
        <div className="row-padding padding-64 container">
          <div className="content">
            <div className="twothird">
              <h1>Difficulties Explained</h1>
              <h5 className="padding-16">
                <strong>Normal</strong> - 1 word prompt for fun, easy, and
                stress free gameplay
              </h5>
              <h5 className="padding-16">
                <strong>Extremely Hard</strong> - 2 word prompt that is
                completely random. For the brave.
              </h5>
              <p className="padding-16">
                Welcome to IMGUESSR.IO, a game that utilizes DALL-E 2 By OpenAI
                to generate random images for you to guess. All difficulties
                give you 60 seconds to guess the image, with new images being
                added every 15 seconds for extra help. Guess the prompt in 60
                seconds to win!
              </p>
            </div>
          </div>
          {/* Footer */}
          <footer className="container padding-32 center opacity">
            <p>
              Made by{" "}
              <a href="https://github.com/rayzhou4" target="_blank">
                Ray Z
              </a>{" "}
              ·{" "}
              <a href="https://github.com/Raywnh" target="_blank">
                Ray H
              </a>{" "}
              ·{" "}
              <a href="https://github.com/migies12" target="_blank">
                Miguel M
              </a>{" "}
              ·{" "}
              <a href="https://github.com/AndyJLi0" target="_blank">
                Andy L
              </a>
            </p>
          </footer>
        </div>
      ) : (
        <Game goBack={goBack} onSubmit={onSubmit} inputRefAnswer={inputRefAnswer}
              onStart={onStart} imageData={imageData} pages={pages}></Game>
      )}
    </div>
  );
      
  function goToHard() {
    setPages(2)
  }

  function goBack() {
    setPages(0)
  }

  function goToNormal() {
    setPages(1);
  }

  async function onStart() {
   
    await fetch('/image/' + pages, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mode: pages
      })
    }).then((res) => res.json()
    ).then ((data) => setImageData(data))

  }
  function onSubmit() {
    const answer = inputRefAnswer.current.value

    if (answer === null) return

    if (answer.toLowerCase() === imageData.word.toLowerCase())
      console.log(true)
    else
      console.log(false)
    console.log(imageData.word)
    inputRefAnswer.current.value = null
  }

}

export default App;
