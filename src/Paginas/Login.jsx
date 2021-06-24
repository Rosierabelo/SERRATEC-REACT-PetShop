import { useState } from 'react';
import './formulario.css';
import http from '../http/index';
const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }

    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }

    const efetuarLogin = (evento) => {
        evento.preventDefault()
        const usuario = {
            email: email,
            senha: senha
        }

        // axios.post('http://localhost:8000/auth/login', usuario).then(response =>{
        //     console.log(response.data)
        //     localStorage.setItem('token', response.data.access_token)
        //     localStorage.setItem('nome', response.data.user.nome)
        //     }).catch(erro => {
        //         console.log(erro)
        //     })

        http.post('auth/login', usuario).then(response => {
            console.log(response.data)
            localStorage.setItem('token', response.data.access_token)
            localStorage.setItem('nome', response.data.user.nome)
        }).catch(erro => {
            console.log(erro)
        })

    }

    return (
        <div className="formulario">
            <h1>Página de login</h1>
            <form onSubmit={efetuarLogin}>
                <div>
                    <label className="labels">Email</label>
                    <input type="email" required value={email} onChange={manipuladorEmail} />
                </div>
                <div>
                    <label className="labels">Senha</label>
                    <input type="password" required value={senha} onChange={manipuladorSenha} />
                </div>
                <button>
                    Login
            </button>
            </form>
        </div>
    );
}

export default Login;