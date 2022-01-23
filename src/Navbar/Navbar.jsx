import styled from "styled-components";
import Icons from "./Icons/Icons";

import Uls from "./Ul/Ul";

const NavBarStyled = styled.nav`
	width: 100%;
	height: 70px;
	background-color: grey;
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: row;

	justify-content: space-between;
`;

function Navbar() {
	return (
		<NavBarStyled>
			<Uls></Uls>
			<Icons />
		</NavBarStyled>
	);
}

export default Navbar;
