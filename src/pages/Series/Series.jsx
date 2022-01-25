import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../Loading/Loading";

function Series() {
	const [dataSeries, setDataSeries] = useState();
	const [dataGenres, setDataGenres] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			fetchSeries();
		}, 1500);
	}, []);

	async function fetchSeries() {
		let response;
		let data;

		response = await fetch(
			"https://api.themoviedb.org/3/genre/tv/list?api_key=c9c649f8dc1856154cf88a683b935a6e"
		);
		data = await response.json();
		setDataGenres(data.genres);

		response = await fetch(
			"https://api.themoviedb.org/3/tv/popular?api_key=c9c649f8dc1856154cf88a683b935a6e"
		);
		data = await response.json();
		setDataSeries(data.results);
		setLoading(true);
	}

	return loading ? (
		<Container>
			<ContainerGenres key='containerGenres'>
				{dataGenres.map((genre) => (
					<ButtonGenre key={genre.id}>{genre.name}</ButtonGenre>
				))}
			</ContainerGenres>
			<ContainerAllPoster key='containerPoster'>
				{dataSeries.map((serie) => {
					let imgSource = `https://image.tmdb.org/t/p/w500${serie.poster_path}`;
					return (
						<ContainerMoviePosters
							key={`poster${serie.id}`}
							url={imgSource}
						>
							<Overview key={`overview${serie.id}`}>
								{serie.overview}
							</Overview>
							<ReleaseDate key={`release${serie.id}`}>
								{" "}
								Air Date : {serie.first_air_date}
							</ReleaseDate>
						</ContainerMoviePosters>
					);
				})}
			</ContainerAllPoster>
		</Container>
	) : (
		<Loading />
	);
}

export default Series;

const ReleaseDate = styled.div`
	width: 500px;
	height: 100px;
	text-align: center;
`;

const Overview = styled.div`
	width: 500px;
	height: 700px;
	font-size: 25px;
	text-align: center;
	padding: 40px;

	&:hover {
		color: white;

		background-color: #000000a7;
	}
`;

const Container = styled.section`
	width: 100%;
	height: 100%;
	color: white;

	display: flex;
	flex-direction: column;
`;

const ContainerGenres = styled.div`
	width: 700px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 10px;
	margin: 50px;
`;

const ButtonGenre = styled.button`
	width: 100px;
	height: 30px;
	border: none;
	border-radius: 4px;
	background-color: #e50914;
	color: white;

	&:hover {
		background-color: #9b070e;
		transition: 0.3s;
		cursor: pointer;
	}
`;

const ContainerAllPoster = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;
const ContainerMoviePosters = styled.div`
	width: 500px;
	height: 750px;
	${({ url }) =>
		url !== undefined
			? `background-image: url(${url})`
			: `background-color: red;`};
	position: relative;
	color: transparent;
	font-size: 35px;

	&:hover {
		background-color: #000000b2;
		color: white;
	}
`;
