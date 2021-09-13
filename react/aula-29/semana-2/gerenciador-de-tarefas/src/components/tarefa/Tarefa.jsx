import { AppVisualizar } from "../../pages/visualizar/visualizar"
import "./tarefa.css"
import { useHistory } from "react-router-dom";


export default function Tarefa({tarefa, deletar}) {
    const history = useHistory();

    return(
        <div className="tarefa">
            <h1>{tarefa.titulo}</h1>
            <div className="botoes">
                <button className="editar"  onClick={() => history.push("/editar")}>E</button>
                <button className="deletar" onClick={() => deletar(tarefa.id)}>X</button>
                <button className="vizualizar" onClick={() => history.push("/visualizar")}>V</button>
            </div>
        </div>
    )
}