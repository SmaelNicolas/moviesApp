import GlobalStyle from "./globalStyled";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Fetch from "./helpers/Fetch";
import Navbar from "./Navbar/Navbar";
import Browse from "./pages/Browse/Browse";
import Latest from "./pages/Latest/Latest";
import Login from "./pages/Login/Login";
import MyList from "./pages/MyList/MyList";
import WhosWatching from "./pages/WhosWatching/WhosWatching";
import { useEffect, useState } from "react";

function App() {
	const [isLogged, setIsLogged] = useState(false);
	return (
		<BrowserRouter>
			<Navbar />
			<GlobalStyle />
			{useEffect(() => {
				setTimeout(() => {
					// setIsLogged(true);
				}, 2000);
			}, [isLogged])}
			{isLogged ? (
				<>
					<Fetch />
					<Routes>
						<Route
							exact
							path='/profiles'
							element={<WhosWatching />}
						/>
						<Route exact path='/' element={<Browse />} />
						<Route
							exact
							path='/browse/series'
							element={<Browse />}
						/>
						<Route
							exact
							path='/browse/movies'
							element={<Browse />}
						/>
						<Route exact path='/latest' element={<Latest />} />
						<Route
							exact
							path='/browse/mylist'
							element={<MyList />}
						/>
					</Routes>
				</>
			) : (
				<Routes>
					<Route exact path='/' element={<Login />} />
				</Routes>
			)}
		</BrowserRouter>
	);
}

export default App;
