import { useHistory } from "react-router-dom";

import { ExternalCard, IncluirTarefa, Tarefa } from "../../coponents/components";

export default function PageHome({ id, setId, tarefasFinalizadas, totalTarefas }) {
    const history = useHistory()
    const tarefas = tratarValorLS()

    function tratarValorLS() {
        const tarefas = localStorage.getItem("tarefas")
        return tarefas? JSON.parse(tarefas) : []
    }

    function incrementarId() {
        setId(id + 1)
    }

    function adicionarTarefa(tituloDaTarefa) {

        const novasTarefas = [{
            id: id,
            titulo: tituloDaTarefa,
            concluida: false,
            conteudo: ""
        }, ...tarefas]

        adicionarNovasTarefasAoLS(novasTarefas)
        incrementarId()
    }

    function adicionarNovasTarefasAoLS(novasTarefas){
        localStorage.setItem("tarefas",JSON.stringify(novasTarefas))
        window.location.reload()
    }

    function deletarTarefa(idTarefa) {
        const novasTarefas = tarefas.filter(tarefa => tarefa.id !== idTarefa);
        adicionarNovasTarefasAoLS(novasTarefas)
        window.location.reload()
    }

    function visualizarTarefa(idTarefa) {
        history.push(`/${idTarefa}`)
    }

    function editarTarefa(idTarefa) {
        history.push(`/${idTarefa}/editar`)
    }

    function alterarStatusTarefa(idTarefa) {
        const novasTarefas = tarefas.map(tarefa => {
            if(tarefa.id === idTarefa){
                tarefa.concluida = !tarefa.concluida
            }
            return tarefa
        })
        adicionarNovasTarefasAoLS(novasTarefas)
    }

    const tarefaFromList = () => {
        return tarefas.map(tarefa => {
            return (
                <li key={tarefa.id}>
                    <Tarefa tarefa={tarefa}
                        visualizar={visualizarTarefa}
                        editar={editarTarefa}
                        deletar={deletarTarefa}
                        alterarStatus={alterarStatusTarefa} />
                </li>
            )
        })
    }

    return (
        <main>
            <div className="container">
                <ExternalCard title="Minhas Tarefas" finalizadas={tarefasFinalizadas} total={totalTarefas}>
                    <IncluirTarefa adicionarTarefa={adicionarTarefa} />
                    <ul>
                        {tarefaFromList()}
                    </ul>
                </ExternalCard>
            </div>
        </main>
    );
}