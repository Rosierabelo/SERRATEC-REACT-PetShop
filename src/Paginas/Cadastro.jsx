import { useState } from 'react';
import './formulario.css';
import http from '../http/index';
const FormularioRegistro = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const manipuladorNome = (evento) => {
        setNome(evento.target.value)
    }

    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }

    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }

    const efetuarCadastro = (evento) => {
        evento.preventDefault()
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        // axios.post('http://localhost:8000/auth/register', usuario).then(response =>
        //     console.log(response.data)).catch(erro => {
        //         console.log(erro)
        //     })

        http.post('auth/register', usuario).then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data.access_token)
        }).catch(erro => {
            console.log(erro)
        })
    }

    return (
       <div className="formulario">
           <h1>Página de cadastro</h1>
           <form onSubmit={efetuarCadastro}>
            <div>
                <label className="labels">Nome</label>
                <input required value={nome} onChange={manipuladorNome} />
            </div>
            <div>
                <label className="labels">Email</label>
                <input type="email" required value={email} onChange={manipuladorEmail} />
            </div>
            <div>
                <label className="labels">Senha</label>
                <input type="password" required value={senha} onChange={manipuladorSenha} />
            </div>
            <button>
                Cadastrar
            </button>
        </form>
       </div>
    );
}

export default FormularioRegistro;