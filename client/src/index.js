import React from 'react';
import  ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';



import reducers from './reducers';
import Main from './Main';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
    <Main />
    </Provider>
    ,document.getElementById('root'));