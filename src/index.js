import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
import Api from './Api';
import About from './About.js';
import './index.css';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/api">Api</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route exact path="/api" component={Api} />
            <Route exact path="/about" component={About} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));