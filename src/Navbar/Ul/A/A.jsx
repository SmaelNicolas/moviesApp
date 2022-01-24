import { Link } from "react-router-dom";
import styled from "styled-components";

const AStyled = styled.div`
	color: blue;
	font-style: italic;
`;

function A() {
	return (
		<>
			<Link to='/'>
				<AStyled>Inicio</AStyled>
			</Link>
			<Link to='/browse/series'>
				<AStyled>Series</AStyled>
			</Link>
			<Link to='/browse/movies'>
				<AStyled>Movies</AStyled>
			</Link>
			<Link to='/latest'>
				<AStyled>Novedades Populares</AStyled>
			</Link>
			<Link to='/browse/mylist'>
				<AStyled>Mi Lista</AStyled>
			</Link>
		</>
	);
}

export default A;
