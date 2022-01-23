import styled from "styled-components";

import Search from "./Search/Search";
import Kids from "./Kids/Kids";
import Notifications from "./Notifications/Notifications";
import Profile from "./Profile/Profile";

const IconsStyled = styled.div`
	width: 400px;
	height: 100%;

	background-color: #ff000057;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

function Icons() {
	return (
		<IconsStyled>
			<Search />
			<Kids />
			<Notifications />
			<Profile />
		</IconsStyled>
	);
}

export default Icons;
