import IncluirTarefa from "../../components/incluir-tarefa/IncluirTarefa";
import ExternalCard from "../../components/external-card/ExternalCard";
import Tarefa from "../../components/tarefa/Tarefa";
import { useState } from "react";

let id = 0;

export default function PageHome() {
    const [tarefas, setTarefas] = useState([])


    function incrementarId() {
        return id++;
    }


    function adicionarTarefa(tituloDaTarefa) {

        const novasTarefas = [{
            id: incrementarId(),
            titulo: tituloDaTarefa,
            concluida: false,
            conteudo: ""
        }, ...tarefas]

        setTarefas(novasTarefas)

    }

    function deletarTarefa(idTarefa) {
        const novasTarefas = tarefas.filter(tarefa => tarefa.id !== idTarefa);
        setTarefas(novasTarefas);
    }

    const tarefaFromList = () => {
        return tarefas.map(tarefa => {
            return (
                <li key={tarefa.id}>
                    <Tarefa tarefa={tarefa} deletar={deletarTarefa}></Tarefa>
                </li>
            )
        })
    }

    return (
        <main>
            <div className="container">
                <ExternalCard title="Lista De Tarefas - Principal">
                    <IncluirTarefa adicionarTarefa={adicionarTarefa} />
                    <ul>
                        {tarefaFromList()}
                    </ul>
                </ExternalCard>
            </div>
        </main>
    );
}
