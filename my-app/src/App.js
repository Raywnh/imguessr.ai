import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";
import React, { useRef, useState, useEffect } from "react";
import Game from "./Game";

function App() {
  // Fetch image url and render it
  const inputRefAnswer = useRef();
  const [pages, setPages] = useState(0);
  const [started, setStarted] = useState(false)
  const [images, setImages] = useState([])
  const [imagePointer, setImagePointer] = useState(0)
  const [score, setScore] = useState(0)
  const [ended, setEnded] = useState(false)
  const [answered, setAnswered] = useState(false)

  return (
    <div>
      {/* Header */}
      <div className="container green center">
        <img
          src={require("./assets/imguessr-header-banner.png")}
          alt="The banner of the website"
        />
      </div>

      {/* Main Grid + If variable "pages" equals to 0, stay on landing page, otherwise go to game page */}
      {pages === 0 ? (
        <div className="row-padding padding-64 container sage main">
          <div className="content">
            <div className="twothird mustard padding-16">
              <h1>How to Play the Game!</h1>
              <p className="padding-16">
               Welcome to IMGUESSR.IO, a game that utilizes DALL•E 2 By OpenAI
                to generate random images. DALL•E 2 has gone rogue and is
                generating random images without your command! Your task is to
                guess the prompt that DALL•E 2 was given before the prompt
                switches, or you lose. All difficulties give you 6 seconds to guess
                the prompt. GOOD LUCK!!!
              </p>
              <h5 className="padding-16">
                <strong>Normal</strong> - 1 word prompt for fun, easy, and
                stress free gameplay
              </h5>
              <h5 className="padding-16">
                <strong>Extremely Hard</strong> - 2 word prompt that is
                completely random. For the brave.
              </h5>

              <p className="xlarge">Choose your difficulty:</p>
              <div>
                <button className="button sage" onClick={goToNormal}>
                  Normal
                </button>
                <p> or </p>
                <button className="button sage" onClick={goToHard}>
                  Extremely Hard
                </button>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="container padding-32 center opacity">
            <p>Made by{"  "} </p>
            <a href="https://github.com/rayzhou4" target="_blank">
              <img src={require("./assets/git.png")} alt="Ray Z" id="logo" />
              <p>Ray Z</p>
            </a>{" "}
            ·{" "}
            <a href="https://github.com/Raywnh" target="_blank">
              <img src={require("./assets/git.png")} alt="Ray Z" id="logo" />
              <p>Ray H</p>
            </a>{" "}
            ·{" "}
            <a href="https://github.com/migies12" target="_blank">
              <img src={require("./assets/git.png")} alt="Ray Z" id="logo" />
              <p>Miguel M</p>
            </a>{" "}
            ·{" "}
            <a href="https://github.com/AndyJLi0" target="_blank">
              <img src={require("./assets/git.png")} alt="Ray Z" id="logo" />
              <p>Andy L</p>
            </a>
          </footer>
        </div>
      ) : (
        <Game onSubmit={onSubmit} inputRefAnswer={inputRefAnswer}
              onStart={onStart} pages={pages} started={started} imagePointer={imagePointer} images={images} score={score} ended={ended} answered={answered}></Game>
      )}
    </div>
  );
  // function that brings user to "Extremely Hard" mode page
  function goToHard() {
    setPages(2);
  }
  // function that brings user to "Normal" mode page
  function goToNormal() {
    setPages(1);
  }
  // function that brings user from either game mode back to the landing page (menu page)
 
  // asynchornous function that gives out up to 10 images, and at that point, it will restart the game automatically
  async function onStart() {
    setStarted(!started); // change started from false to true, or true to false
    
    // if started is false, fetch images for the user to guess
    if (!started) {
      await generate()
    }
    else {
      window.location.reload(false)
    }

  }

  async function generate() {
    let count = 1
    while (count < 10) {
      await fetch('/image/' + pages, {
      }).then((res) => res.json()
      ).then ((data) => setImages((oldImages) => [...oldImages, data]))
      
      setTimeout(() => {
        setAnswered(false)
        count++
        setImagePointer(count)
      }, 7000)

      await fetch('/image/' + pages, {
      }).then((res) => res.json()
      ).then ((data) => setImages((oldImages) => [...oldImages, data]))
    }
    setTimeout(() => {
      setEnded(true)
      setImages([])
    }, 10000)

  }
  // function to take in user input to compare with the image's word value, 
  // if true: signal correct by changing background to green,
  // if false: signal failure by changing background to red.
  function onSubmit() {
    const answer = inputRefAnswer.current.value

    if (answer === null) return

    setAnswered(true)
    if (images[imagePointer].word && answer.toLowerCase() === images[imagePointer].word.toLowerCase()) {
      console.log(true)

      
      setScore(score + 1)
      

      document.getElementsByClassName("gamePage")[0].classList.add("green");

      setTimeout(() => {
        document.getElementsByClassName("gamePage")[0].classList.remove("green");
        document.getElementsByClassName("gamePage")[0].classList.add("sage");

      }, 2000);
    } else {
      console.log(false);
      // change background from sage (blue) to red
      // after 2s, change back to default background (sage/blue)
      document.getElementsByClassName("gamePage")[0].classList.add("red");

      setTimeout(() => {
        document.getElementsByClassName("gamePage")[0].classList.remove("red");
        document.getElementsByClassName("gamePage")[0].classList.add("sage");

      }, 2000);
    }
    console.log(images[imagePointer].word)
    inputRefAnswer.current.value = null
  }
}

export default App;
