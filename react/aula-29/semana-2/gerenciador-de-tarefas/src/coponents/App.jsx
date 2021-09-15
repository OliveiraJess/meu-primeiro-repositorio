import './app.css';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MenuNav } from './components';
import { PageEditar, PageHome, PageVisualizar, PageNaoEncontrada } from '../pages/pages'
import { HOME, VISUALIZAR, EDITAR, NOT_FOUND } from '../routes/rotas'

export default function App() {
  const [tarefas, setTarefas] = useState([])
  const [id, setId] = useState(0)

  return (
    <Router>
      <MenuNav />

      <Switch>
        <Route path={HOME} exact>
          <PageHome tarefas={tarefas} setTarefas={setTarefas} id={id} setId={setId} />
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




