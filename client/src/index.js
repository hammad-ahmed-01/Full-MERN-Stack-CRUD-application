import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// this is the main function to display our contributions in the ReactDOM
ReactDOM.render(
    // wrapping our application within the provider component
    <Provider store={store} >
        <App />     
    </Provider>,
    document.getElementById('root')
);
