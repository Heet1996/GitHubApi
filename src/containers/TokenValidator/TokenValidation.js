import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {connect} from 'react-redux';

// import './TokenValidation.css'
import * as actions from '../../store/actions/index';


class TokenValidator extends Component
{
    state={
        token:''
    }
    handleForm=(e)=>{

        e.preventDefault();
        this.props.tokenValidator(this.state.token);
        
    }
    inputChangeHandler=(e)=>{

        this.setState({token:e.target.value});
        
    }
    render()
    {
      let err='';  
      if(this.props.error)
      {
        if(this.props.error=='INVALID')
        err=(<h4>Please Enter the Valid Token</h4>)
        else err=(<h4>{this.props.error.message}</h4>);
      }  
      return (  
      <main className="TokenPage">
        <h3 className="Header">
            Token Validator
            <p>Before Proceeding further please validate your token</p>
        </h3>
        <form autoComplete="off" onSubmit={this.handleForm}>
            
            <TextField id="standard-basic" label="Access Token" name="token" onChange={this.inputChangeHandler}/>
            <Button variant="contained" color="primary" className="Button" type="submit">Submit</Button>
             {err}   
             {this.props.token?this.props.history.push('/repo'):null}
        </form>
    </main>
)
    }
}

const mapStateToProps=(state)=>{
    return {
        token:state.tokenValidator.token,
        loading:state.tokenValidator.loading,
        error:state.tokenValidator.error
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        tokenValidator:(token)=>dispatch(actions.tokenValidator(token))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TokenValidator);