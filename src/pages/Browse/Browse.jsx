import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../Loading/Loading";

function Browse() {
	const [dataMovies, setDataMovies] = useState();
	const [dataSeries, setDataSeries] = useState();
	const [dataPersonalities, setDataPersonalities] = useState([]);
	const [personalities, setPersonalities] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			fetchTrendings();
		}, 4000);
	}, [personalities]);
	async function fetchTrendings() {
		let response;
		let data;

		response = await fetch(
			"https://api.themoviedb.org/3/trending/movie/week?api_key=c9c649f8dc1856154cf88a683b935a6e"
		);
		data = await response.json();
		setDataMovies(data.results);
		response = await fetch(
			"https://api.themoviedb.org/3/trending/tv/week?api_key=c9c649f8dc1856154cf88a683b935a6e"
		);
		data = await response.json();
		setDataSeries(data.results);
		setLoading(true);
		response = await fetch(
			"https://api.themoviedb.org/3/person/popular?api_key=c9c649f8dc1856154cf88a683b935a6e"
		);
		data = await response.json();
		setDataPersonalities(data.results);

		let arr2 = [];

		let forAsync = async () => {
			for (let item of dataPersonalities) {
				arr2.push(await fetchPersonality(item.id));
			}
			setPersonalities(arr2);
			return;
		};

		forAsync();
	}

	async function fetchPersonality(id) {
		let response = await fetch(
			`https://api.themoviedb.org/3/person/${id}?api_key=c9c649f8dc1856154cf88a683b935a6e`
		);
		let data = await response.json();
		let celebrity = {
			name: data.name,
			bio: data.biography,
			img: data.profile_path,
		};
		return celebrity;
	}

	return loading ? (
		<BrowsePageStyled>
			<TitleTrending key='title'>Trending Movies </TitleTrending>
			<DivTrending key='trending'>
				{dataMovies.map((movie) => {
					let imgSource = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

					return (
						<>
							<TrendingTitle key={`movie${movie.id}`}>
								{movie.title}
							</TrendingTitle>
							<Img key={movie.id} url={imgSource}></Img>
						</>
					);
				})}
			</DivTrending>
			<TitleTrending> Trending Series </TitleTrending>
			<DivTrending>
				{dataSeries.map((serie) => {
					let imgSource = `https://image.tmdb.org/t/p/w500${serie.backdrop_path}`;

					return (
						<>
							<TrendingTitle key={`serie${serie.id}`}>
								{serie.name}
							</TrendingTitle>
							<Img key={serie.id} url={imgSource}></Img>
						</>
					);
				})}
			</DivTrending>
			<TitleTrending key='nametitle' center={true}>
				Trending Personalities
			</TitleTrending>
			<ContainerAllPoster>
				{personalities.map((person) => {
					let imgSource = `https://image.tmdb.org/t/p/w500${person.img}`;
					return (
						<ContainerMoviePosters
							key={`nam${person.img}`}
							url={imgSource}
						>
							<ReleaseDate key={`name${person.img}`}>
								{person.name}
							</ReleaseDate>
							<Overview key={`bio${person.img}`}>
								{person.bio}
							</Overview>
						</ContainerMoviePosters>
					);
				})}
			</ContainerAllPoster>
		</BrowsePageStyled>
	) : (
		<BrowsePageStyled>
			<Loading />
		</BrowsePageStyled>
	);
}

const ReleaseDate = styled.div`
	width: 500px;
	height: 100px;
	text-align: center;
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

const ContainerAllPoster = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 10px;
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

const TitleTrending = styled.h2`
	width: 100%;

	padding: 30px;
	color: #ff0000ce;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	padding-top: 40px;
	${({ center }) => (center === true ? `text-align:center` : undefined)}
`;

const Img = styled.img`
	width: 500px;
	height: 281px;
	${({ url }) =>
		url !== undefined
			? `background-image: url(${url})`
			: `background-color: red;`};
`;

const TrendingTitle = styled.span`
	width: 500px;
	height: 281px;
	line-height: 280px;
	position: absolute;
	text-align: center;
	color: white;
	font-size: 25px;
	font-weight: 700;
	background-color: #0000007f;
	overflow: hidden;
	transition: 0.3s;

	&:hover {
		cursor: pointer;
		background-color: transparent;
		color: transparent;
		transition: 0.3s;
	}
`;

const DivTrending = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	position: relative;
`;

const BrowsePageStyled = styled.section`
	width: 100%;
	height: 100%;
	background-color: black;
	padding: 30px;
`;

export default Browse;
