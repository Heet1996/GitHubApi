import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {TextField} from '@material-ui/core';
import {connect} from 'react-redux';

// import './TokenValidation.css'
import * as actions from '../../store/actions/index';


class TokenValidator extends Component
{
    state={
        token:null
    }
    handleForm=(e)=>{

        e.preventDefault();
        this.props.onSetToken(this.state.token);
        this.props.history.push('/repo')
        
    }
    inputChangeHandler=(e)=>{

        this.setState({token:e.target.value});
        
    }
    render()
    {
      return (  
      <main className="TokenPage">
        <h3 className="Header">
            Token Validator
            <p>Before Proceeding further please validate your token</p>
        </h3>
        <form autoComplete="off" onSubmit={this.handleForm}>
            
            <TextField id="standard-basic" label="Access Token" name="token" onChange={this.inputChangeHandler} value={this.props.token}/>
            <Button variant="contained" color="primary" className="Button" type="submit">Submit</Button>

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
        tokenValidator:(token)=>dispatch(actions.tokenValidator(token)),
        onSetToken:(token)=>dispatch(actions.tokenSetter(token))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TokenValidator);