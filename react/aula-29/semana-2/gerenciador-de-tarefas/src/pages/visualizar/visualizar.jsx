import IncluirTarefa from "../../components/incluir-tarefa/IncluirTarefa";
import ExternalCard from "../../components/external-card/ExternalCard";
import Tarefa from "../../components/tarefa/Tarefa";
import { useState } from "react";
import Botao from "../../components/botao/Botao";
import TarefaEditar from "../../components/tarefa-editar/TarefaEditar";

export function AppVisualizar() {
  return (
    <main>
      <div className="container">

        <ExternalCard title="Lista De Tarefas - vizualizar">
          <div className="row space-evenly">
            <Botao>Voltar</Botao>
            <span className="flex2"></span>
          </div>

          <TarefaEditar title="Minha primeira tarefa" readOnly="true">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, saepe quidem animi illo, accusamus consequuntur, voluptatum ipsa voluptatem quo repudiandae nihil veritatis? Ipsa fuga dolorem est labore itaque dolores corporis.
          </TarefaEditar>
        </ExternalCard>

      </div>
    </main>
  );
}