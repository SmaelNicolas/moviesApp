import styled from "styled-components";

const NotificationsStyled = styled.div`
	width: 40px;
	height: 40px;
	background-color: lightblue;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Notifications() {
	return (
		<NotificationsStyled>
			<>Bell</>
		</NotificationsStyled>
	);
}

export default Notifications;
