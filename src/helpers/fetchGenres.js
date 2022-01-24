export const fetchMovieGenres = () => {
	fetch(
		"https://api.themoviedb.org/3/genre/movie/list?api_key=c9c649f8dc1856154cf88a683b935a6e"
	)
		.then((data) => data.json())
		.then((movieGenres) => {
			console.log("GENEROS MOVIE");
			console.log(movieGenres);
		});
};

export const fetchTvGenres = () => {
	fetch(
		"https://api.themoviedb.org/3/genre/tv/list?api_key=c9c649f8dc1856154cf88a683b935a6e"
	)
		.then((data) => data.json())
		.then((tvGenres) => {
			console.log("GENEROS TV");
			console.log(tvGenres);
		});
};
