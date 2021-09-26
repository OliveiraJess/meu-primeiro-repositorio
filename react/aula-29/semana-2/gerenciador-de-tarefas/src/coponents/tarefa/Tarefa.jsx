import { useState } from "react"
import { BiEdit } from 'react-icons/bi'
import { CgInfo, CgClose } from 'react-icons/cg'
import "./tarefa.css"
export default function Tarefa({ tarefa, deletar, visualizar, editar, alterarStatus }) {
    const [className, setClassName] = useState(valorInicialTarefa)

    function valorInicialTarefa() {
        return tarefa.concluida ? "tarefa concluida" : "tarefa"
    }

    function handleOnclickTitle() {
        if (tarefa.concluida === false) {
            setClassName("tarefa concluida")
        } else {
            setClassName("tarefa")
        }
        alterarStatus(tarefa.id)
    }

    return (
        <div className={className}>
            <h1 onClick={handleOnclickTitle}>{tarefa.titulo}</h1>
            <div className="botoes">
                <button className="vizualizar" onClick={() => visualizar(tarefa.id)}><CgInfo /></button>
                <button className="ediatr" onClick={() => editar(tarefa.id)}><BiEdit /></button>
                <button className="deletar" onClick={() => deletar(tarefa.id)}><CgClose /></button>
            </div>
        </div>
    )
}