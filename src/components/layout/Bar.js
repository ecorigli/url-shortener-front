import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";

const Bar = () => {
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre} </span>{" "}
        </p>
      ) : null}

      <nav className="nav-principal">
        <Link to={"/"} className="enlace-cuenta">
          Cerrrar Sesión
        </Link>
      </nav>
    </header>
  );
};

export default Bar;
