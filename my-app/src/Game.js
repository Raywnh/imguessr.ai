import "./App.css";
import { RotatingLines} from 'react-loader-spinner'
function game(props) {
  return (
    <div>
      <div className="gamePage">    
        <button
          className="button dark-yellow padding-large large margin"
          id="normalButton"
          onClick={props.goBack}
        >
          Go Back
        </button>
        
        {(props.pages===1)? (<h1>Normal Mode</h1>) : ((props.pages===2)? <h1>Hard Mode</h1> : <></>)}
        <button className="start-button" onClick={props.onStart}>Start</button>
        <div className="realGame">
        {/* <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        /> */}
        <img src={props.imageData.link}></img>
        </div>
        <div className="text-container">
          <label className="text"> your guess here:</label>
          <input ref={props.inputRefAnswer} className="textInput" type="text" name="text" size="30" />
          <button onClick={props.onSubmit} className="answer-button">Enter</button>
        </div>
      </div>
    </div>
  );
}

export default game;
