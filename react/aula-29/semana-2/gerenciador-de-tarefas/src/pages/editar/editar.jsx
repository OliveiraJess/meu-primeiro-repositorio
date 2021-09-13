import IncluirTarefa from "../../components/incluir-tarefa/IncluirTarefa";
import ExternalCard from "../../components/external-card/ExternalCard";
import Tarefa from "../../components/tarefa/Tarefa";
import { useState } from "react";
import Botao from "../../components/botao/Botao";
import TarefaEditar from "../../components/tarefa-editar/TarefaEditar";
import { useHistory } from "react-router-dom";
import "../../components/botao/botao.css"

export function AppEditar() {
  const history = useHistory();

  return (
    <main>
      <div className="container">

        <ExternalCard title="Lista De Tarefas - editar">
          <div className="row space-evenly">
            <button onClick={() => history.push("/")}>Voltar</button>
            <span className="flex1"></span>
            <Botao>Salvar</Botao>
          </div>

          <TarefaEditar readOnly="false">
            editar
          </TarefaEditar>
        </ExternalCard>

      </div>
    </main>
  );
}
