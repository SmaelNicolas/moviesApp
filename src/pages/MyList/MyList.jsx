import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../Loading/Loading";

function MyList() {
	const [dataList, setDataList] = useState();
	const [dataListDescription, setDataListDescription] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetList() {
			let response;
			let data;
			let number = getRandomInt();

			response = await fetch(
				`https://api.themoviedb.org/3/list/${number}?api_key=c9c649f8dc1856154cf88a683b935a6e`
			);
			data = await response.json();
			setDataList(data.items);
			setDataListDescription(data.description);

			setLoading(true);
		}
		setTimeout(() => {
			fetList();
		}, 1500);
	}, []);

	function getRandomInt() {
		return Math.floor(Math.random() * 10) + 1;
	}

	return loading ? (
		<MyListStyled>
			<DescriptionList>{dataListDescription}</DescriptionList>
			<ContainerMovies>
				{dataList.map((movie) => {
					let imgSource = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

					return (
						<ContainerPosters
							key={`random${movie.id}`}
							url={imgSource}
						>
							<ContainerMovieTitle key={`randomTitle${movie.id}`}>
								{movie.title}
							</ContainerMovieTitle>
						</ContainerPosters>
					);
				})}
			</ContainerMovies>
		</MyListStyled>
	) : (
		<Loading />
	);
}

const MyListStyled = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;

	justify-content: flex-start;
	align-items: center;

	gap: 30px;
`;

const DescriptionList = styled.div`
	width: 500px;
	height: 50px;
	color: white;
	text-transform: uppercase;
	font-size: 20px;
	text-align: center;
	margin-top: 100px;
`;

const ContainerMovieTitle = styled.div`
	width: 500px;
	height: 281px;
	background-color: #0000009d;
	color: white;
	position: absolute;
	text-align: center;
	line-height: 280px;
	font-size: 20px;
	letter-spacing: 0.6px;
	&:hover {
		cursor: pointer;
		background-color: transparent;
		color: transparent;
		transition: 0.3s;
	}
`;

const ContainerMovies = styled.div`
	width: 100%;
	height: max-content;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 30px;

	justify-content: center;
	align-items: center;
`;

const ContainerPosters = styled.div`
	width: 500px;
	height: 281px;
	${({ url }) =>
		url !== undefined
			? `background-image: url(${url})`
			: `background-color: red;`};
	position: relative;
`;

export default MyList;
