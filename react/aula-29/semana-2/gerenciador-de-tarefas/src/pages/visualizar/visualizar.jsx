import IncluirTarefa from "../../components/incluir-tarefa/IncluirTarefa";
import ExternalCard from "../../components/external-card/ExternalCard";
import Tarefa from "../../components/tarefa/Tarefa";
import { useState } from "react";
import Botao from "../../components/botao/Botao";
import TarefaEditar from "../../components/tarefa-editar/TarefaEditar";
import { useHistory } from "react-router-dom";
import "../../components/botao/botao.css"



export function AppVisualizar() {
    const history = useHistory();

          

  return (
    <main>
      <div className="container">

        <ExternalCard title="Lista De Tarefas - Visualizar">
          <div className="row space-evenly">
            <button onClick={() => history.push("/")}>Voltar</button>
            <span className="flex2"></span>
          </div>
          <TarefaEditar readOnly="true">
          visualizar
          </TarefaEditar>
        </ExternalCard>

      </div>
    </main>
  );
}