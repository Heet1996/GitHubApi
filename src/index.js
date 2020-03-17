import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose, combineReducers} from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import tokenReducer from './store/reducers/tokenValidator';
import repoReducer from './store/reducers/repository';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
let rootReducer=combineReducers({tokenValidator:tokenReducer,repoReducer:repoReducer});
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, 
document.getElementById('root'));   

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
