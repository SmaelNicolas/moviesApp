import GlobalStyle from "./globalStyled";
import Fetch from "./helpers/Fetch";
import Navbar from "./Navbar/Navbar";
import Browse from "./pages/Browse/Browse";
import Latest from "./pages/Latest/Latest";
import Login from "./pages/Login/Login";
import MyList from "./pages/MyList/MyList";
import WhosWatching from "./pages/WhosWatching/WhosWatching";

function App() {
	return (
		<>
			<Fetch />
			<GlobalStyle />
			<Navbar />

			<Login />

			<WhosWatching />

			<Browse />

			<Latest />

			<MyList />
		</>
	);
}

export default App;
