import "./App.css";

import Fibonacci from "./Fibonacci";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div name="result" id="result">
          _-_-_-_
        </div>
        <>is the</>
        <div id="inputDisplay"></div>
        <div>number in the fibonacci sequence</div>
        <Fibonacci />
      </header>
    </div>
  );
}

export default App;
