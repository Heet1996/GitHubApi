import React, {Component} from 'react';
import {Route, Routes} from 'react-router';
import {BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';

import {Home} from './components/Home/Home';
import TokenValidator from './containers/TokenValidator/TokenValidation';

import './App.css';
import RepoSearch from "./containers/RepoSearch/RepoSearch";
import PrivateRoute from "./hoc/PrivateRouter";


class App extends Component {
    render() {

        return (<div className="App">
                <BrowserRouter>
                    <Routes>

                        <Route path="/token"
                               element={<TokenValidator/>}
                        />
                        <Route path="/repo"
                               element={
                            <PrivateRoute token={this.props.token}>
                                <RepoSearch/>
                            </PrivateRoute>
                        }
                        />
                        <Route path="/"
                               element={<Home/>}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        token: state.tokenValidator.token
    }
}
export default connect(mapStateToProps)(App);