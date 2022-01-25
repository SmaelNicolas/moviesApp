import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { IsLoggedProvider } from "./context/IsLoggedContext";

ReactDOM.render(
	<React.StrictMode>
		<IsLoggedProvider>
			<App />
		</IsLoggedProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
