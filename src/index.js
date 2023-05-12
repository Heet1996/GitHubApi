import React from 'react';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {createRoot} from "react-dom/client"

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import tokenReducer from './store/reducers/tokenValidator';
import repoReducer from './store/reducers/repoSearch';

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsDenylist, actionsCreators and other options
});
let rootReducer = combineReducers({tokenValidator: tokenReducer, repoReducer: repoReducer});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
