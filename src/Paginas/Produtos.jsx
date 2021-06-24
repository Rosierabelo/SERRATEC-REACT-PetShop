import { useState, useEffect } from "react";
import CardProdutos from "../componentes/CardProdutos";
import http from "../http";

const Produtos = () => {

    const [produtos, setProdutos] = useState([{preco:0}]);

    useEffect(() => {
        http.get('produtos').then(response => setProdutos(response.data))
    }, [])

    return (
        <div className="pag-Produtos">
            <section>
                <h2 className="titulo-pag">Produtos</h2>
            </section>
            <section className="sectionProd"> 
                {produtos.map((item, indice) => <CardProdutos key={indice} id={item.id} nome={item.nome} preco={item.preco.toFixed(2)}/>)}
            </section>
        </div>
    )

}
export default Produtos;