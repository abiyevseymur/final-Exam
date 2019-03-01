import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


ReactDOM.render(
<Provider  store={createStore(rootReducer,composeWithDevTools())}>
    <App />
</Provider>
, document.getElementById('root'));


