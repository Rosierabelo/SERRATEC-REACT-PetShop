import { Link } from "react-router-dom";
import './cardsEstilos.css';
const CardServicos = ({nome, preco, id}) => {
    return (
        <div className='cardServicoBase'>
            <div className='titulo'><h3>{nome}</h3></div>
            <div className='cardPreco'><p>R$ </p>{preco}</div>
            <div className='link'><Link to={`/servicos/${id}`}>Ver detalhes</Link></div>
        </div>
    ) 
}
export default CardServicos;