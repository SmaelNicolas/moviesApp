import React from "react";
import { fetchTvGenres } from "./fetchGenres";
import { fetchMovieGenres } from "./fetchGenres";
import { fetchLatestMovieWeek } from "./fetchLatest";
import { fetchLatestTvWeek } from "./fetchLatest";
// import { fetchLatestMovieDay } from "./fetchLatest";
// import { fetchLatestTvDay } from "./fetchLatest";

function Fetch() {
	return (
		<>
			{fetchMovieGenres()}
			{fetchTvGenres()}
			{fetchLatestMovieWeek()}
			{fetchLatestTvWeek()}
			{/* {fetchLatestMovieDay()} */}
			{/* {fetchLatestTvDay()} */}
		</>
	);
}

export default Fetch;
