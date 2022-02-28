import React from 'react';
import { Provider } from 'react-redux';

import store from '#/redux-logic';
import PhaserRoot from '#/phaser-logic/PhaserRoot';
import ReactRoot from './ReactRoot';
import ReactPlaceholder from './ReactPlaceholder';

import './app.css';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="app-root">
				<ReactRoot>
					<ReactPlaceholder />
				</ReactRoot>
				<PhaserRoot />
			</div>
		</Provider>
	);
}

export default App;