import './App.css';

function Identidade(props) {
  return <h1>Meu nome é {props.name} e eu tenho {props.idade} anos</h1>;
  
}

function App() {
  return (
    <div>
      <Identidade name="Jessica" idade="24" />
    </div>
    
  );
}
export default App;
