import logo from './logo.svg';
import './App.css';
import DropZone from './atoms/DropZone/DropZone';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <DropZone />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
