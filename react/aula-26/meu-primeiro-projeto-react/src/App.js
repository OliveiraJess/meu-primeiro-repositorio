import "./app.css";

import Conteudo from "./components/Conteudo";
import Card from "./components/card/Card";


function App() {

  return (
    <div className="container-app">
      <div className="group-cards">
        <Card titulo="Primeiro Titulo"
          nome="Jessica" idade="24"
          altura='500px'
          largura="500px"></Card>
        <Card />
        <Card />
      </div>

      <Conteudo nome="Pedro" idade="22"> </Conteudo>
    </div>
  );
}

export default App;

