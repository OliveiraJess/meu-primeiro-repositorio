import logo from './logo.svg';
import './App.css';

function App() {
  const nome = "Jessica"
  const idade = 24
  return (
    <div className="App">
      <header className="App-header">
        <p>Meu nome é {nome}</p>
        <p>E tenho {idade} anos</p>
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

