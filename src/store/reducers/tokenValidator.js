import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: '',
    loading: false,
    error: null
}
let tokenReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case actionTypes.START_TOKEN_VALIDATION:
            return {...state, loading: true, error: null};
        case actionTypes.TOKEN_VALIDATION_SUCCESS:
            return {...state, error: null, loading: false};
        case actionTypes.TOKEN_VALIDATION_FAIL:
            return {...state, error: actions.err, loading: false, token: null};
        case actionTypes.TOKEN_INVALID:
            return {...state, token: null, error: "INVALID"};
        case actionTypes.TOKEN_SETTER:
            return {...state, token: actions.token}
        default :
            return state;
    }
}
export default tokenReducer