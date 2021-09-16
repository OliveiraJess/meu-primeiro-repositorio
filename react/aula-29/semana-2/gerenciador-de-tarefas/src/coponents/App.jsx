import './app.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MenuNav } from './components';
import { PageEditar, PageHome, PageVisualizar, PageNaoEncontrada } from '../pages/pages'
import { HOME, VISUALIZAR, EDITAR, NOT_FOUND } from '../routes/rotas'

export default function App() {
  const [tarefas, setTarefas] = useState([])
  const [id, setId] = useState(0)
  const [tarefasFinalizadas, setTarefasFinalizadas] = useState(0)

  
  function contadorDeTarefasFinalizadas() {
    return tarefas.filter(tarefa => tarefa.concluida === true).length
  }

  useEffect(() => {
    setTarefasFinalizadas(contadorDeTarefasFinalizadas())
  }, [tarefas])

  return (
    <Router>
      <MenuNav />
      <Switch>
        <Route path={HOME} exact>
          <PageHome
            tarefas={tarefas}
            setTarefas={setTarefas}
            id={id} 
            setId={setId}
            tarefasFinalizadas={tarefasFinalizadas}
            totalDeTarefas={tarefas.length} />
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




