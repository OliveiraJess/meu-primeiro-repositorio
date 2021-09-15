import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

import {ExternalCard, Botao, TarefaEditar} from "../../coponents/components";

export default function PageEditar({ tarefas, setTarefas }) {
    const [conteudo, setConteudo] = useState()
    const history = useHistory()
    const { id } = useParams()
    let tarefaAtual

    
    function voltar() {
        history.goBack()
    }

    function salvar() {
        const tarefasAtualizadas = tarefas.map(tarefa => {
            if (tarefa.id === tarefaAtual.id) {
                tarefaAtual.conteudo = conteudo
            }
            return tarefa;
        })

        setTarefas(tarefasAtualizadas)
    }

    function handleOnChange(tarefaEditada) {
        console.log(tarefaEditada);
        setConteudo(tarefaEditada)
    }

    function tarefaExiste() {
        tarefaAtual = tarefas.find(tarefa => tarefa.id.toString() === id)
    }

    return (
        <>
        <main>
            {tarefaExiste()}
            <div className="container">

                <ExternalCard title="Vizualizar Tarefa">
                    <div className="row space-evenly">
                        <Botao onclick={voltar}>Voltar</Botao>
                        <span className="flex1"></span>
                        <Botao onclick={salvar}>Salvar</Botao>
                    </div>

                    <TarefaEditar tarefa={tarefaAtual} readOnly={false} onChange={handleOnChange}/>
                </ExternalCard>

            </div>
        </main>
        </>
    );
}