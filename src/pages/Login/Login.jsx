import styled from "styled-components";
import LoginContainer from "./LoginContainer/LoginContainer";

const LoginStyled = styled.section`
	width: 100%;
	height: 100vh;
	background-image: url("https://i.ibb.co/ctvGmdS/bcg.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;

	justify-content: center;
	align-items: center;
`;

export default function Login() {
	return (
		<LoginStyled>
			<LoginContainer></LoginContainer>
		</LoginStyled>
	);
}
