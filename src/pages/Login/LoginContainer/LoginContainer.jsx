import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { useContext } from "react";
import { IsLoggedInContext } from "../../../context/IsLoggedContext";

function LoginContainer() {
	const [, setIsLogged] = useContext(IsLoggedInContext);

	const clickLogIn = (e) => {
		e.preventDefault();
		setIsLogged(true);
	};

	return (
		<LoginContainerStyled>
			<DivContainer>
				<LoginTitle>Inicia sesión</LoginTitle>
				<Form type='submit'>
					<Input
						type='email'
						placeholder='Email o número de teléfono'
					/>
					<Input type='text' placeholder='Contraseña' />
					<Button onClick={clickLogIn}>Iniciar sesión</Button>
				</Form>

				<DivHelps>
					<CheckBox
						width='18'
						height='21'
						type='checkbox'
						id='recuerdame'
						name='recuerdame'
					></CheckBox>
					<Span>Recuérdame</Span>
					<Links>¿Necesitas ayuda?</Links>
				</DivHelps>
				<DivFacebook>
					<FaFacebookSquare />
					<SpanFacebook>Iniciar sesión con Facebook</SpanFacebook>
				</DivFacebook>
				<DivFirstTime>
					¿Primera vez en Netflix?
					<SpanColor color='white'>Suscribite ya</SpanColor>
				</DivFirstTime>
				<DivInfo>
					Esta página está protegida por Google reCAPTCHA para
					comprobar que no eres un robot.
					<SpanColor color='#0071eb'>Más Info.</SpanColor>
				</DivInfo>
			</DivContainer>
		</LoginContainerStyled>
	);
}

const DivInfo = styled.div`
	width: 299px;
	height: 30px;
	color: #8c8c8c;
	display: inline;
	font-size: 15px;
	text-align: left;
`;

const SpanColor = styled.span`
	padding-left: 5px;
	color: ${({ color }) => color};
	&:hover {
		cursor: pointer;
	}
`;

const DivFirstTime = styled.div`
	width: 314px;
	height: 18px;
	color: #737373;
	font-weight: 500;
	margin: 20px 0px;
`;

const SpanFacebook = styled.span`
	width: 164px;
	height: 15px;
	color: #737373;
	display: inline;
	font-size: 13px;
	font-weight: 500;
	letter-spacing: 0.1px;
	line-height: 13px;
	text-align: center;
	&:hover {
		cursor: pointer;
	}
`;

const DivFacebook = styled.div`
	width: 314px;
	height: 19px;
	color: #333333;
	padding: 20px;
	display: flex;
	gap: 10px;
`;

const DivHelps = styled.div`
	width: 314px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Links = styled.a`
	width: 120px;
	height: 17px;
	color: #b3b3b3;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 13px;
	font-weight: 500;
	padding: 2px 0px 0px;

	&:hover {
		cursor: pointer;
	}
`;

const Span = styled.span`
	width: 74px;
	height: 15px;
	color: #b3b3b3;
	display: inline;
	font-size: 15px;
	font-weight: 500px;
	line-height: 15.6px;
	text-align: start;
	margin: 0;
`;

const CheckBox = styled.input`
	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};
	font-family: Arial, Helvetica, sans-serif;
	line-height: 19.2px;
	color: #000;
	font-size: 18px;
	top: 0;
	background: #737373;
	border-radius: 2px;
	border: 0;
	left: -20px;
`;

const DivContainer = styled.div`
	width: 314px;
	height: 370px;
	color: #333333;
`;

const LoginContainerStyled = styled.div`
	width: 450px;
	height: 660px;
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 4px;
	color: #333333;
	display: flex;
	flex-direction: column;
	margin: 0px 0px 90px;
	padding: 60px 68px 40px;
`;

const LoginTitle = styled.h1`
	width: 314px;
	height: 37px;
	color: #ffffff;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 32px;
	font-weight: 700;
	margin: 0px 0px 28px;
`;

const Form = styled.form`
	width: 314px;
	color: #333333;
	margin: 0px;
	padding: 0px;
`;

const Input = styled.input`
	width: 314px;
	height: 50px;
	font-size: 17px;
	font-weight: 500;
	font-family: Arial, Helvetica, sans-serif;
	background-color: #333333;
	border-radius: 4px;
	color: #ffffff;
	padding: 16px 20px;
	margin: 10px 0px;
	border: none;
`;

const Button = styled.button`
	width: 314px;
	height: 48px;

	align-items: flex-start;
	background-color: #d1151b;
	border-radius: 4px;
	box-shadow: #000000 0px 1px 0px 0px;
	color: #ffffff;
	display: inline-block;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 700;
	font-size: 16px;
	letter-spacing: 0.1px;
	line-height: 16px;
	margin: 24px 0px;
	text-align: center;
	border: none;
`;

export default LoginContainer;
