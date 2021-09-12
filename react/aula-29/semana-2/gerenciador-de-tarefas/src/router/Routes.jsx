import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MenuNav from '../components/menu-vaigation/MenuNav';
import PageHome from '../pages/home/home'
import { AppVisualizar } from '../pages/visualizar/visualizar';
import { AppEditar } from '../pages/editar/editar';


export default function Routes() {
  return (
    <>
      <Router>
        <MenuNav />

        <Switch>
          <Route path='/' exact>
            <PageHome/>
          </Route>
          <Route path='/visualizar' exact>
            <AppVisualizar/>
          </Route>
          <Route path='/editar' exact>
            <AppEditar/>
          </Route>
          <Route path='*'>
            <main><h1>PÁGINA NÃO ENCONTRADA</h1></main>
          </Route>
        </Switch>
      </Router>
    </>
  );
}