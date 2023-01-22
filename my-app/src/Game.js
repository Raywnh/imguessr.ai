import "./App.css";
import { TailSpin} from 'react-loader-spinner'
function game(props) {
  return (
    <div>
      {/* Game Grid */}
      <div className="gamePage sage">
        <div className=" mustard padding-16 content" id="game-box">   
  
        {(props.pages===1)? (<h1>Normal Mode</h1>) : ((props.pages===2)? <h1>Hard Mode</h1> : <></>)}
        <button className="start-button sage button" onClick={props.onStart}>{!props.started? <h1>Start</h1> : <h1>End</h1>}</button>
        <h4>Score: {props.score}   {"out of 10"} </h4>
        <h4>{!props.ended? <></> : <>GAME OVER</>}</h4>
        <h4>{!props.answered? <></> : <>{props.images[props.imagePointer].word}</>}</h4>
        <div className="realGame">
        {!props.started? <></> : props.images[props.imagePointer] === undefined?
          <TailSpin
            height="120"
            width="120"
            color="#71a7c8"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            className="spinner"/> : <img id="generatedImage" src={props.images[props.imagePointer].link}></img>}
        </div>
        <div className="text-container">
          <input placeholder="Guess the Prompt!" ref={props.inputRefAnswer} className="textInput" type="text" name="text" size="30" />
          <button onClick={props.onSubmit} className="answer-button button sage">Enter</button>
        </div>
        {/* Footer */}
        <footer className="container padding-32 center opacity">
            <p>Made by{"  "} </p>
              
              <a href="https://github.com/rayzhou4" target="_blank">
              <img src={require('./assets/git.png')} alt="Ray Z" id="logo"/>
              <p>Ray Z</p>
              </a>{" "}
              ·{" "}
              <a href="https://github.com/Raywnh" target="_blank">
              <img src={require('./assets/git.png')} alt="Ray Z" id="logo"/>
              <p>Ray H</p>
              </a>{" "}
              ·{" "}
              <a href="https://github.com/migies12" target="_blank">
              <img src={require('./assets/git.png')} alt="Ray Z" id="logo"/>
              <p>Miguel M</p>
              </a>{" "}
              ·{" "}
              <a href="https://github.com/AndyJLi0" target="_blank">
              <img src={require('./assets/git.png')} alt="Ray Z" id="logo"/>
              <p>Andy L</p>
              </a>

          </footer>
        </div>
      </div>
    </div>
  );
}

export default game;
