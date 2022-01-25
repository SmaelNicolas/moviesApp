import React, { createContext, useState } from "react";

export const IsLoggedInContext = createContext();

export const IsLoggedProvider = (props) => {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<IsLoggedInContext.Provider value={[isLogged, setIsLogged]}>
			{props.children}
		</IsLoggedInContext.Provider>
	);
};
