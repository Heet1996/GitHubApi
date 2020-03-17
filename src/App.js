import React from 'react';
import {Route,Switch,withRouter, Redirect} from 'react-router';
import {BrowserRouter} from "react-router-dom";

import {Home} from './components/Home/Home';
import TokenValidator from './containers/TokenValidator/TokenValidation';
import RepoSearch from './containers/RepoSearch/RepoSearch';

import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
            
            <Route path="/token" component={TokenValidator} />
            <Route path="/repo" component={RepoSearch}/>
            <Route path="/" component={Home} />
            
            
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
