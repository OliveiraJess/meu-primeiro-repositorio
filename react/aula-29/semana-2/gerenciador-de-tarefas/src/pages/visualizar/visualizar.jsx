import { useHistory, useParams, useLocation } from "react-router-dom";

import { ExternalCard, Botao, TarefaEditar } from "../../coponents/components";
import { NOT_FOUND } from "../../routes/rotas";

export default function PageVisualizar({ tarefas }) {
  const location = useLocation()
  const {id} = useParams()
  const history = useHistory()
  let tarefaAtual

  function voltar() {
    history.goBack()
  }

  function validarLocation(){
    if(location.pathname.includes('rex->se numero')){
      return id
    }{
      history.push(NOT_FOUND)
    }
  }

  function tarefaExiste() {
    tarefaAtual = tarefas.find(tarefa => tarefa.id.toString() === validarLocation())
  }

  return (
    <main>
      {tarefaExiste()}
      <div className="container">

        <ExternalCard title="Vizualizar Tarefa">
          <div className="row space-evenly">
            <Botao onclick={(voltar)}>Voltar</Botao>
            <span className="flex2"></span>
          </div>

          <TarefaEditar tarefa={tarefaAtual} readOnly={true} />
        </ExternalCard>

      </div>
    </main>
  )
}