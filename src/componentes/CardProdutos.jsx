import { Link } from "react-router-dom";
import './cardsEstilos.css';
const CardProdutos = ({ nome, preco, id }) => {
    return (
        <div className='cardProdutoBase'>
            <div className='titulo'><h3>{nome}</h3></div>
            <div className='cardPreco'><p>R$ </p>{preco}</div>
            <div className='link'><Link to={`/produtos/${id}`}>Ver detalhes</Link></div>
        </div> 
    )
}
export default CardProdutos;