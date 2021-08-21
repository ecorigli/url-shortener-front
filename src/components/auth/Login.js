import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

      useEffect(() => {
        if(autenticado) {
            props.history.push('/domains');
        }

        if(mensaje) {
            showAlert(mensaje.msg, mensaje.categoria);
        }
        
    }, [mensaje, autenticado, props.history]);

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alert-error');
        }

        iniciarSesion({ email, password });
    }



    return ( 
        <div className="form-usuario">
            { alert ? ( <div className={`alert ${alert.categoria}`}> {alert.msg} </div> )  : null }

            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
                    </div>
                </form>

                <Link to={'/new-account'} className="enlace-cuenta">
                    Get Account
                </Link>
                <br></br>
                <Link to={'/domains'} className="enlace-cuenta">
                    Domains
                </Link>
            </div>
        </div>
     );
}
 
export default Login;