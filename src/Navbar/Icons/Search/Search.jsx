import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchStyled = styled.div`
	width: 40px;
	height: 40px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		cursor: pointer;
	}
`;

function Search() {
	return (
		<SearchStyled>
			<FaSearch />
		</SearchStyled>
	);
}

export default Search;
