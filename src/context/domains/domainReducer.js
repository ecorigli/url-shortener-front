import { 
    OBTENER_DOMAINS
} from '../../types';


export default (state, action) => {
    switch(action.type) {
        case OBTENER_DOMAINS:
            return {
                ...state,
                domains: action.payload
            }
        default:
            return state;
    }
}