import styled from "styled-components";

const AStyled = styled.a`
	color: blue;
	text-decoration: none;
	font-style: italic;
`;

function A() {
	return (
		<>
			<AStyled>Inicio</AStyled>
			<AStyled>Series</AStyled>
			<AStyled>Peliculas</AStyled>
			<AStyled>Novedades Populares</AStyled>
			<AStyled>Mi Lista</AStyled>
		</>
	);
}

export default A;
