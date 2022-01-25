import styled from "styled-components";
import Icons from "./Icons/Icons";

import Uls from "./Ul/Ul";

const NavBarStyled = styled.nav`
	width: 100%;
	height: 70px;
	background-color: #000000;
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: row;
	padding-left: 50px;
	justify-content: space-between;
	z-index: 10;
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
