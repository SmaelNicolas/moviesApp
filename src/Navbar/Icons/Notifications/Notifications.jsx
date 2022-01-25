import styled from "styled-components";
import { FaBell } from "react-icons/fa";

const NotificationsStyled = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	&:hover {
		cursor: pointer;
	}
`;

function Notifications() {
	return (
		<NotificationsStyled>
			<FaBell />
		</NotificationsStyled>
	);
}

export default Notifications;
