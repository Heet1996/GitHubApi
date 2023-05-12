import * as actionTypes from './actionTypes';
import axios from 'axios'

export let repoSearchStart = () => {
    return {
        type: actionTypes.REPO_SEARCH_START
    }
}

export let repoSearchSuccess = (repo) => {
    return {
        type: actionTypes.REPO_SEARCH_SUCCESS,
        repo: repo
    }
}

export let repoSearchWithNoResult = (repo) => {
    return {
        type: actionTypes.REPO_SEARCH_NO_RESULT,
        repo: repo
    }
}

export let repoSearchFail = (error) => {
    return {
        type: actionTypes.REPO_SEARCH_FAIL,
        error
    }
}

export let clearSearch = () => {
    return {
        type: actionTypes.CLEAR_SEARCH
    }
}

export let repoSearch = (query, token, cursor) => (dispatch) => {

    dispatch(repoSearchStart());
    axios.post(`https://api.github.com/graphql`, {
        query: query,
        variables: {cursor}
    }, {
        headers: {
            'Authorization': `bearer ${token}`
        }
    })
        .then((res) => {
            if (res.data.data.search.edges.length === 0)
                dispatch(repoSearchWithNoResult(res.data.data.search));
            else dispatch(repoSearchSuccess(res.data.data.search));
        })
        .catch((err) => {
            dispatch(repoSearchFail(err));
        })

}
