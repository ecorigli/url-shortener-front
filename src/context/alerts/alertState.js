import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types';

const AlertState = props => {
    const initialState = {
        alert: null
    }

    const [ state, dispatch ] = useReducer(alertReducer, initialState);

    const showAlert = (msg, categoria) => {
        dispatch({
            type:  MOSTRAR_ALERTA,
            payload: {
                msg, 
                categoria
            }
        });
        
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000);
    }


    return (
        <alertContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        > 
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState;