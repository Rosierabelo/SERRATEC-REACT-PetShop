import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../http";
import './Detalhe.css';

const Servico = () => {
    const { id } = useParams();
    const [servico, setServico] = useState({preco:0});

    useEffect(() => {
        http.get('servicos/' + id).then(response => setServico(response.data))
    }, [id])

    return(
        <div className="detalhe-prodServ">
            <div className="titulo-prodServ"><h2>{servico.nome}</h2></div>
            <div className="preco-prodServ"><p>R$ </p><p>{servico.preco.toFixed(2)}</p></div>
        </div> 
    )
}
export default Servico;