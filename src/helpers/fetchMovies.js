const logg = () => {
	console.log("Hola");

	fetch(
		"https://api.themoviedb.org/3/discover/movie?api_key=c9c649f8dc1856154cf88a683b935a6e"
	)
		.then((data) => {
			return data.json();
		})
		.then((data) => {
			console.log(data);
			//IMAGEN
			console.log(`https://image.tmdb.org/t/p/w500${data.backdrop_path}`);
			//POSTER
			console.log(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
			//
		});
};

export default logg;
