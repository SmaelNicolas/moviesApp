import styled from "styled-components";

const SearchStyled = styled.div`
	width: 40px;
	height: 40px;
	background-color: black;
	color: yellow;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Search() {
	return (
		<SearchStyled>
			<>Lupa</>
		</SearchStyled>
	);
}

export default Search;
