import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {connect} from 'react-redux';



// import './TokenValidation.css'
import * as actions from '../../store/actions/index';
import Repository from '../../components/Repository/Repository';

const GET_ORGANIZATION = (queryString)=>`
{
    search(query: "${queryString}", type: REPOSITORY, first:5) {
        repositoryCount
        pageInfo {
          endCursor
          startCursor
        }
        edges {
          node {
            ... on Repository {
              name
              id
              description	
              watchers{
                totalCount
              }
              stargazers{
                totalCount
              }
              url
            }
          }
        }
      }
  }
`

class RepoSearch extends Component
{
    state={
        repoName:null
    }
    handleForm=(e)=>{

        e.preventDefault();
        this.props.repoSearch(GET_ORGANIZATION(`is:public ${this.state.repoName} in:name`),this.props.token);
        
    }
    inputChangeHandler=(e)=>{

        this.setState({repoName:e.target.value});
        
    }
    repositoryMapper=()=>
    
        this.props.repo.edges.map(({node})=>(<Repository key={node.id} repository={node} />))
    
    render()
    {
    
   
    return (  

      <main className="RepoPage">
        {this.props.error ? (<p>{this.props.error.message}</p>) :
        (<form autoComplete="off" onSubmit={this.handleForm}>
            
        <TextField id="standard-basic" label="Enter Public Repository" name="repoName" onChange={this.inputChangeHandler}/>
        <Button variant="contained" color="primary" className="Button" type="submit">Search</Button>
        { this.props.repo ? this.repositoryMapper() : null}
    </form>) 
        }
        
    </main>
)
    }
}

const mapStateToProps=(state)=>{
    return {
        repo:state.repoReducer.repo,
        loading:state.repoReducer.loading,
        error:state.repoReducer.error,
        token:state.tokenValidator.token
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        repoSearch:(query,token)=>dispatch(actions.repoSearch(query,token)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RepoSearch);