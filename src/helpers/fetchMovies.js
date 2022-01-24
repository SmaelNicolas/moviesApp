const logg = () => {
	console.log("Hola");

	fetch(
		//Lista de generos
		// "https://api.themoviedb.org/3/genre/movie/list?api_key=c9c649f8dc1856154cf88a683b935a6e"

		//una pelicula en particular
		// "https://api.themoviedb.org/3/discover/movie?api_key=c9c649f8dc1856154cf88a683b935a6e"

		//trending  /trending/{media_type}/{time_window}
		"https://api.themoviedb.org/3/trending/movie/week?api_key=c9c649f8dc1856154cf88a683b935a6e"
	)
		.then((data) => {
			return data.json();
		})
		.then((data) => {
			console.log(data);
			//IMAGEN
			// console.log(`https://image.tmdb.org/t/p/w500${data.backdrop_path}`);
			//POSTER
			// console.log(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
			//
		});
};

export default logg;
