import GlobalStyle from "./globalStyled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { IsLoggedInContext } from "./context/IsLoggedContext";

import Navbar from "./Navbar/Navbar";
import Browse from "./pages/Browse/Browse";
import Login from "./pages/Login/Login";
import MyList from "./pages/MyList/MyList";
import WhosWatching from "./pages/WhosWatching/WhosWatching";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";

function App() {
	const [isLogged] = useContext(IsLoggedInContext);
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				{isLogged ? (
					<>
						{/* <Fetch /> */}
						<Navbar />
						<Routes>
							<Route
								exact
								path='/profiles'
								element={<WhosWatching />}
							/>
							<Route exact path='/' element={<Browse />} />
							<Route exact path='/series' element={<Series />} />
							<Route exact path='/movies' element={<Movies />} />

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
		</>
	);
}

export default App;
