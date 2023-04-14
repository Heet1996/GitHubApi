import React, {Component} from 'react';
import {connect} from 'react-redux';

import './TokenValidation.css'
import * as actions from '../../store/actions/index';


class TokenValidator extends Component {
    state = {
        token: ''
    }
    handleForm = (e) => {

        e.preventDefault();
        this.props.tokenValidator(this.state.token);

    }
    inputChangeHandler = (e) => {

        this.setState({token: e.target.value});

    }

    render() {
        let err = '';
        if (this.props.error) {
            if (this.props.error === 'INVALID')
                err = (<h4 className="error">Token is InValid.</h4>)
            else err = (<h4 className="error">{this.props.error.message}</h4>);
        }
        return (
            <div className="TokenPage">
                <div className="Header">
                    <h3 className="title">Token Validator</h3>
                    <p>
                        Before Proceeding further please validate your token.
                        To generate token and find more info refer <a rel="noopener noreferrer" href="https://developer.github.com/v4/guides/" target="_blank"><u>this</u></a>.
                    </p>
                </div>


                <form autoComplete="off" onSubmit={this.handleForm} className="formElement">

                    <input type="text" className="textField" name="token" onChange={this.inputChangeHandler} placeholder="Enter your token here....."/>
                    {err}
                    <button className="btn-inline-form" type="submit">Submit</button>

                    {this.props.token ? this.props.history.push('/repo') : null}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.tokenValidator.token,
        loading: state.tokenValidator.loading,
        error: state.tokenValidator.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        tokenValidator: (token) => dispatch(actions.tokenValidator(token))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TokenValidator);