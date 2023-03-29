import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/index';
import ReduxPromise from 'redux-promise';

// const store = createStore();

// store(reducers);
const store = applyMiddleware(ReduxPromise)(createStore);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store(rootReducer)}>
    <App />
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



