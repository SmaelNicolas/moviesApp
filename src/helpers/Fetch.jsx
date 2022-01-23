import React from "react";
import logg from "./fetchMovies";

function Fetch() {
	const mensaje = logg();
	return <div> {mensaje}</div>;
}

export default Fetch;
