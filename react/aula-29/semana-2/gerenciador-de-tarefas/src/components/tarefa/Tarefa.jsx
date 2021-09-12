import { AppVisualizar } from "../../pages/visualizar/visualizar"
import "./tarefa.css"
export default function Tarefa({tarefa, deletar}) {

    return(
        <div className="tarefa">
            <h1>{tarefa.titulo}</h1>
            <div className="botoes">
                <button className="editar"  onClick={() => alert("cliquei aqui editar")}>E</button>
                <button className="deletar" onClick={() => deletar(tarefa.id)}>X</button>
                <button className="vizualizar" onClick={() => AppVisualizar()}>V</button>
            </div>
        </div>
    )
}