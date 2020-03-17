import * as actionTypes from '../actions/actionTypes';

const initialState={
    repo:null,
    loading:false,
    error:null
}
let repoReducer=(state=initialState,actions)=>{
    

    switch(actions.type)
    {
        case actionTypes.REPO_SEARCH_START:return{...state,loading:true,error:null};
        case actionTypes.REPO_SEARCH_SUCCESS: 
        return{...state,repo:actions.repo,error:null,loading:false};
        case actionTypes.REPO_SEARCH_FAIL:return {...state,error:actions.error,loading:false,repo:null};
        default : return state;
    }

}
export default repoReducer