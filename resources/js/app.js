import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ToDjoContainer from './containers/ToDjoContainer';

render(
	<Provider store={store}>
		<ToDjoContainer />
	</Provider>, document.getElementById('root'));
