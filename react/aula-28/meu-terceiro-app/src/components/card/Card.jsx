import Atributo from '../atributo/Atributo.jsx'
import Titulo from '../titulo/Titulo'
import Conteudo from '../conteudo/Conteudo';
import './card.css'

function Card(props) {
    return (
        <div className="card">
            <div className="cardImage">
                <img src="../../img/001.png"></img>
            </div>
            <div className="cardConteudo">
                <Conteudo>001</Conteudo>
                <Titulo>Bulbasaur</Titulo>
                <ul>
                    <li><Atributo nome='planta' /></li>
                    <li><Atributo nome='veneno' /></li>
                </ul>
            </div>
        </div>
    )

}
export default Card