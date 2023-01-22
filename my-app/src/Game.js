import "./App.css";

function game(props) {
  return (
    <div>
      <header>
        <meta charset="UTF-8" />
        <title>Game</title>
      </header>

      <body className="gamePage">
        <button
          className="button dark-yellow padding-large large margin"
          id="normalButton"
          onClick={props.goBack}
        >
          Go Back
        </button>

        <div className="realGame"> image here
        </div>

        <form>
          <label for="text"> your guess here:</label>
          <input className="textInput" type="text" id="text" name="text" size="30" />
        </form>

      </body>
    </div>
  );
}

export default game;
