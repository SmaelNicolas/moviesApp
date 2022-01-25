import { Link } from "react-router-dom";
import styled from "styled-components";

const AStyled = styled.div`
	text-align: center;
	color: rgb(255, 255, 255);
	cursor: default;
	display: block;
	font-size: 14px;
	height: 11.1094px;
	line-height: 11.124px;
	letter-spacing: 0.8px;
	margin-left: 18px;
	text-align: left;
	&:hover {
		color: #808080b3;
		cursor: pointer;
	}
`;

function A() {
	return (
		<>
			<Link to='/'>
				<AStyled>Home</AStyled>
			</Link>
			<Link to='/series'>
				<AStyled>Series</AStyled>
			</Link>
			<Link to='/movies'>
				<AStyled>Movies</AStyled>
			</Link>
			<Link to='/browse/mylist'>
				<AStyled>Random List</AStyled>
			</Link>
		</>
	);
}

export default A;
