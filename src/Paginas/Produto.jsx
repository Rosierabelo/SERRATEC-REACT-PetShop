
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../http";
import './Detalhe.css';

const Produto = () => {
    const { id } = useParams();
    const [produto, setProduto] = useState({preco:0});

    useEffect(() => {
        http.get('produtos/' + id).then(response => setProduto(response.data))
    }, [id])

    return(
        <div className="detalhe-prodServ">
            <div className="titulo-prodServ"><h2>{produto.nome}</h2></div>
            <div className="preco-prodServ"><p>R$ </p><p>{produto.preco.toFixed(2)}</p></div>
        </div> 
    )
}
export default Produto;