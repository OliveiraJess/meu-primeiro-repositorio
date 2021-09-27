import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartoesVisitaPage from './pages/CartoesVisitaPage';
import CartoesVisitaDetalhe from './pages/CartaoVisitaDetalhe';

function App() {

  return (
    <Router>

      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/cartoes-visita'>Cartoes Visita</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/cartoes-visita'>
          <CartoesVisitaPage />
        </Route>
        <Route path='/cartao-visita/:id'>
          <CartoesVisitaDetalhe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
