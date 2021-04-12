import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';

render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'));
