import * as actionTypes from './actionTypes';
import axios from 'axios'

export let repoSearchStart=()=>{
    return {
        type:actionTypes.REPO_SEARCH_START
    }
}

export let repoSearchSuccess=(repo)=>{
    return {
        type:actionTypes.REPO_SEARCH_SUCCESS,
        repo:repo
    }
}

export let repoSearchFail=(error)=>{
    return {
        type:actionTypes.REPO_SEARCH_FAIL,
        error
    }
}

export let repoSearch=(query,token)=>(dispatch)=>{

    dispatch(repoSearchStart());
    axios.post(`https://api.github.com/graphql`,{
        query:query
    },{
        headers:{
            'Authorization':`bearer ${token}`
        }
    })
    .then((res)=>{

        
        dispatch(repoSearchSuccess(res.data.data.search))
    })
    .catch((err)=>{
          dispatch(repoSearchFail(err)); 
    })

}
