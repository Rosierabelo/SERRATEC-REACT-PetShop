import { useState, useEffect } from "react";
import ListaServicos from "../componentes/CardServicos";
import http from "../http";

const Servicos = () => {

    const [servicos, setServicos] = useState([{preco:0}]);

    useEffect(() => {
        http.get('servicos').then(response => setServicos(response.data))
    }, []) 

    return (
        <div className="pag-Servicos">
            <section>
                <h2 className="titulo-pag">Serviços</h2>
            </section>
            <section className="sectionServ">
                {servicos.map((item, indice) => <ListaServicos key={indice} id={item.id} nome={item.nome} preco={item.preco.toFixed(2)}/>)}
            </section>
        </div> 
    )

}
export default Servicos;