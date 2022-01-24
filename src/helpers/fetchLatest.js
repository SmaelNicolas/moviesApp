export const fetchLatestMovieWeek = () => {
	fetch(
		"https://api.themoviedb.org/3/trending/movie/week?api_key=c9c649f8dc1856154cf88a683b935a6e"
	)
		.then((data) => data.json())
		.then((moviesLatestWeek) => {
			console.log("MOVIES LATEST WEKK");
			console.log(moviesLatestWeek);
		});
};

export const fetchLatestMovieDay = () => {
	fetch(
		"https://api.themoviedb.org/3/trending/movie/day?api_key=c9c649f8dc1856154cf88a683b935a6e"
	)
		.then((data) => {
			data.json();
		})
		.then((moviesLatestDay) => {
			console.log("MOVIES LATEST DAY");
			console.log(moviesLatestDay);
		});
};

export const fetchLatestTvWeek = () => {
	fetch(
		"https://api.themoviedb.org/3/trending/tv/week?api_key=c9c649f8dc1856154cf88a683b935a6e"
	)
		.then((data) => data.json())
		.then((moviesLatestWeek) => {
			console.log("TV LATEST WEKK");
			console.log(moviesLatestWeek);
		});
};

export const fetchLatestTvDay = () => {
	fetch(
		"https://api.themoviedb.org/3/trending/tv/day?api_key=c9c649f8dc1856154cf88a683b935a6e"
	)
		.then((data) => {
			data.json();
		})
		.then((moviesLatestDay) => {
			console.log("TV LATEST DAY");
			console.log(moviesLatestDay);
		});
};
