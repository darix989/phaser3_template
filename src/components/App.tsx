import React from "react";
import { Provider } from "react-redux";

import store from "../redux-logic";
import PhaserRoot from "../phaser/PhaserRoot";
import ReactRoot from "./ReactRoot";

import './app.css';

const App: React.FC = (props) => {
	return (
		<Provider store={store}>
			<div className="app-root">
				<ReactRoot>
					<div className="react-parent">
						<div className="react-content">Hello World</div>
					</div>
				</ReactRoot>
				<PhaserRoot />
			</div>
		</Provider>
	);

}

export default App;