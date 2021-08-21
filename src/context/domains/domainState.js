import React, { useReducer } from "react";

import domainContext from "./domainContext";
import domainReducer from "./domainReducer";
import { OBTENER_DOMAINS } from "../../types";

import axiosClient from "../../config/axios";

const DomainState = (props) => {
  const initialState = {
    domains: [],
    formulario: false,
    errorformulario: false,
    domain: null,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(domainReducer, initialState);

  const obtenerDomains = async () => {
    try {
      const resultado = await axiosClient.get("/domain");

      dispatch({
        type: OBTENER_DOMAINS,
        payload: resultado.data.data,
      });
    } catch (error) {
      const alert = {
        msg: "Hubo un error",
        categoria: "alert-error",
      };

      console.log(alert);
    }
  };

  return (
    <domainContext.Provider
      value={{
        domains: state.domains,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        domain: state.domain,
        mensaje: state.mensaje,
        obtenerDomains,
      }}
    >
      {props.children}
    </domainContext.Provider>
  );
};

export default DomainState;
