import logo from './imagem.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-imagem" alt="imagem" />
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


// const name = 'Jessica de Oliveira';
// const element = <h1>Olá mundo, meu nome é {name}!</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );

// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

const name = 'Jessica de Oliveira';
const idade = '24'
const element = (
  <div>
    <h1>Olá mundo, meu nome é {name}!</h1>
    <h1>Eu tenho {idade} anos.</h1>
  </div>
);

const element = {
  type: 'h1',
  props: {
    nome: 'nome',
    idade: 'idade'
  }
};

