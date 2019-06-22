import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import './index.css';
import App from './App';

const store = configureStore({});

ReactDOM.render(<App store={store} />, document.getElementById('root'));