import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { logger, enableLogs } from 'utilis/logger';
import 'static/css/common.css';

import './style.less';
import Routers from './routers';
import rootReducer from './reducers';

/**
 * Initialization
 */

// Check logger
if (typeof jhDebug !== 'undefined' && jhDebug === true) { // eslint-disable-line no-undef
	enableLogs(true);
	logger.log('logger is enabled');
}

// Redux initialze
const store = createStore(rootReducer);



ReactDOM.render(
	<Provider store={store}>
		<Routers />
	</Provider>,
	document.getElementById('root'),
);