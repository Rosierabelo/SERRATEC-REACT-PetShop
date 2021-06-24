import imagem from './img/loja-virtual-petshop-aipress.png';
import './estilo.css';
import Produtos from './Produtos';
import Servicos from './Servicos';


const Home = () => {
    return (
        <div>
            <div className="home">
                <img className="imagem" src={imagem} alt="Logo Pet Shop" />
                <h1 className="nomeSite">Pet Shop Serratec</h1>
                <p className="descricao">O Pet Shop Serratec foi fundado dia 21 de junho de 2021. 
                    <br />Aqui você encontra tudo para o seu pet!</p>
            </div>
            <div>
                <Produtos />
                <Servicos />
            </div>

        </div>
    )
}

export default Home;