import styled from "styled-components";
import Logo from "./Logo/Logo";
import A from "./A/A";

const UlStyled = styled.ul`
	width: auto;
	height: 100%;

	padding: 5px;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	gap: 35px;

	background-color: pink;
`;

function Uls() {
	return (
		<UlStyled>
			<Logo />
			<A />
		</UlStyled>
	);
}

export default Uls;
