import './app.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MenuNav } from './components';
import { PageEditar, PageHome, PageVisualizar, PageNaoEncontrada, PageLogin } from '../pages/pages'
import { HOME, VISUALIZAR, EDITAR, NOT_FOUND, LOGIN } from '../routes/rotas'

export default function App() {
  const [tarefas, setTarefas] = useState(valorInicialTarefas)
  const [id, setId] = useState(valorInicialId)
  const [tarefasFinalizadas, setTarefasFinalizadas] = useState(0)

  function valorInicialTarefas() {
    const valorInicial = localStorage.getItem("tarefas")
    return valorInicial ? JSON.parse(valorInicial) : []

  }

  function valorInicialId() {
    const valorInicial = localStorage.getItem("id")
    return valorInicial ? JSON.parse(valorInicial) : 0
  }

  function countTarefasFinalizadas() {
    return tarefas.filter(tarefa => tarefa.concluida === true).length
  }

  useEffect(() => {
    setTarefasFinalizadas(countTarefasFinalizadas())
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
  }, [tarefas])

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(id))
  }, [id])


function validarUsuarioLogado() {
  const usuario = sessionStorage.getItem("usuario")
  if(!usuario){
    return <PageLogin/>
  }else{
    return <PageHome
            tarefas={tarefas}
            setTarefas={setTarefas}
            id={id}
            setId={setId}
            tarefasFinalizadas={tarefasFinalizadas}
            totalTarefas={tarefas.length} />
  }

} 

  return (
    <Router>

      <MenuNav />

      <Switch>
        <Route path={LOGIN} exact component={PageLogin}/>
        <Route path={HOME} exact>
          {validarUsuarioLogado()}
        </Route>
        <Route path={VISUALIZAR} exact>
          <PageVisualizar tarefas={tarefas} />
        </Route>
        <Route path={EDITAR} exact>
          <PageEditar tarefas={tarefas} setTarefas={setTarefas} />
        </Route>
        <Route path={NOT_FOUND}>
          <PageNaoEncontrada />
        </Route>
      </Switch>
    </Router>
  );
}




