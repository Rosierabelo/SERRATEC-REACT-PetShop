import './estilo.css';
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastre-se</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default NavBar