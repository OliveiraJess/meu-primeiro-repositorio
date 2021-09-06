import Atributo from '../atributo/Atributo.jsx'
import Titulo from '../titulo/Titulo'
import Conteudo from '../conteudo/Conteudo';
import './card.css'


function Card(props) {
    return (
        <ul className="card">
            <div className="cardImage">
                <img src={props.pokemonImage} alt='imagem-do-pokemon'></img>
            </div>
            <div className="cardConteudo">
                <Conteudo>{props.numero}</Conteudo>
                <Titulo>{props.nome}</Titulo>
                <ul>
                    <li>{props.atributo.map((atributo, index) => <Atributo key={index} nome={atributo} />)} </li>
                </ul>
            </div>
        </ul>
    )

}
export default Card;








// function Card(props) {
//     return (
//         <div className="card">
//             <div className="cardImage">
//                 <img src="../../img/001.png"></img>
//             </div>
//             <div className="cardConteudo">
//                 <Conteudo>001</Conteudo>
//                 <Titulo>Bulbasaur</Titulo>
//                 <ul>
//                     <li><Atributo nome='planta' /></li>
//                     <li><Atributo nome='veneno' /></li>
//                 </ul>
//             </div>
//         </div>
//     )

// }
// export default Card;