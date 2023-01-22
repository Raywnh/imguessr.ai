import "./App.css";

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
        <button className="start-button" onClick={props.onStart}>Start</button>

        <div className="realGame">
        <img src={props.imageData.link}></img>
        </div>

        <div className="text-container">
          <label for="text"> your guess here:</label>
          <input ref={props.inputRefAnswer} className="textInput" type="text" name="text" size="30" />
          <button onClick={props.onSubmit} className="answer-button">Enter</button>
        </div>
      </div>
    </div>
  );
}

export default game;
