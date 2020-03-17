import * as actionTypes from './actionTypes';

export let tokenValidStart=()=>{
    return {
        type:actionTypes.START_TOKEN_VALIDATION
    }
}

export let tokenValidSuccess=(token)=>{
    return {
        type:actionTypes.TOKEN_VALIDATION_SUCCESS,
        payload:token
    }
}

export let tokenValidationFail=(token)=>{
    return {
        type:actionTypes.TOKEN_VALIDATION_FAIL
    }
}

export let tokenInvalid=(token)=>{
    return {
        type:actionTypes.TOKEN_INVALID
    }
}

export let tokenSetter=(token)=>{
      return{
          type:actionTypes.TOKEN_SETTER,
          token
      }  
}

export let tokenValidator=(token)=>(dispatch)=>{

    console.log("Token Validator");
}