import * as actionTypes from '../actions/actionTypes';

const initialState={
    repo:[],
    pageInfo:null,
    loading:false,
    error:null,
    status:"Please Provide Repository Name",
    repositoryCount:null
}
let repoReducer=(state=initialState,actions)=>{
    

    switch(actions.type)
    {
        case actionTypes.REPO_SEARCH_START:return{...state,loading:true,error:null};
        case actionTypes.REPO_SEARCH_SUCCESS: let oldState=[...state.repo]
            return{...state,repo:[...oldState,...actions.repo.edges],
                pageInfo:actions.repo.pageInfo,repositoryCount:actions.repo.repositoryCount,
                error:null,loading:false,status:null};
        case actionTypes.REPO_SEARCH_FAIL:return {...state,error:actions.error,loading:false,repo:[],status:null,repositoryCount:null};
        case actionTypes.CLEAR_SEARCH:return {...state,repo:[],pageInfo:null,status:"Please Provide Repository Name",repositoryCount:null}
        case actionTypes.REPO_SEARCH_NO_RESULT:return {...state,repo:[],loading:false,status:"No Result Found",repositoryCount:0}
        default : return state;
    }

}
export default repoReducer