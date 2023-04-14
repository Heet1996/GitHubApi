import * as actionTypes from './actionTypes';
import axios from 'axios';

export let tokenValidStart = () => {
    return {
        type: actionTypes.START_TOKEN_VALIDATION
    }
}

export let tokenValidSuccess = () => {
    return {
        type: actionTypes.TOKEN_VALIDATION_SUCCESS,
    }
}

export let tokenValidationFail = (err) => {
    return {
        type: actionTypes.TOKEN_VALIDATION_FAIL,
        err: err
    }
}

export let tokenInvalid = () => {
    return {
        type: actionTypes.TOKEN_INVALID
    }
}

export let tokenSetter = (token) => {
    return {
        type: actionTypes.TOKEN_SETTER,
        token
    }
}

export let tokenValidator = (token) => (dispatch) => {
    dispatch(tokenValidStart());
    let query = `{
        query{
            rateLimit{
                remaining
            }
        }
    }`
    axios.post(`https://api.github.com/graphql`, {
        query: query
    }, {
        headers: {
            'Authorization': `bearer ${token}`
        }
    })
        .then((res) => {
            dispatch(tokenValidSuccess());
            if (res.status === 200)
                dispatch(tokenSetter(token));

        })
        .catch((err) => {
            if (err.response) {
                if (err.response.status === 401)
                    dispatch(tokenInvalid());
                else dispatch(tokenValidationFail(err));
            } else dispatch(tokenValidationFail(err));
        })

}