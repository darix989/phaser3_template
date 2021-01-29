import React from "react";
import PhaserRoot from "../phaser/PhaserRoot";

// Load phaser method #2 - uncomment PhaserRoot
const App : React.FC = (props) => {
	return (
		<div>
			<div style={{ textAlign: "center" }}>
				<h1>Hello World</h1>
			</div>
			<PhaserRoot />
		</div>
	);
	
}

export default App;