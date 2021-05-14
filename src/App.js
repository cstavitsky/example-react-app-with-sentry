import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={forceError} className="App-logo">
        Click to Trigger An Error
      </button>
    </div>
  );
}

function forceError() {
  throw new Error("Triggered error")
}

export default App;
