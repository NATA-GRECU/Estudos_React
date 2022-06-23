import logo from './logo.svg';
import './App.css';
import {x, y} from './variaveis.js';
import titulo from './Titulo';
import Titulo from './Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titulo></Titulo>
        <p>
          Esse é meu novo App. {x} <br/>
          {y}
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
