import './estilo.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Paginas/Home';
import Produtos from './Paginas/Produtos';
import Servicos from './Paginas/Servicos';
import NavBar from './componentes/NavBar';
import Pagina404 from './Paginas/Pagina404';
import Produto from './Paginas/Produto';
import Servico from './Paginas/Servico';
import Cadastro from './Paginas/Cadastro';
import Login from './Paginas/Login';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/produtos">
          <Produtos />
        </Route>
        <Route path="/produtos/:id">
          <Produto />
        </Route>
        <Route exact path="/servicos">
          <Servicos />
        </Route>
        <Route path="/servicos/:id">
          <Servico />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
