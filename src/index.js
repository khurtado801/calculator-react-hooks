import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

/**
 * ReactDOM has two arguements passed in
 * The first arguement is what we want to render
 * The second arguement is where we want to render it
 */
ReactDOM.render(
	<App />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();