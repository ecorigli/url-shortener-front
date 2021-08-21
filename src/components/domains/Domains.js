import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import AuthContext from "../../context/autenticacion/authContext";

const Domains = () => {
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Bar />
      </div>
    </div>
  );
};

export default Domains;
