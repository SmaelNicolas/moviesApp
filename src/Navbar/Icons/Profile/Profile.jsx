import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";

const ProfileStyled = styled.div`
	width: 45px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	gap: 5px;

	&:hover {
		cursor: pointer;
	}
`;

const Imagen = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 5px;
`;

function Profile() {
	return (
		<ProfileStyled>
			<Imagen src='https://i.ibb.co/9pcy9wP/AAAABTYctxxbe-Uk-KEdl-Mx-Xm4-FVGD6-Dq-THk-Q0-TQ5-CQJ9jb-OMn-G0-CYx-Yc-SICc-TUQz8-Dr-B7-Cp-KUGpq-JVMt.png' />
			<FaArrowDown cursor='pointer' />
		</ProfileStyled>
	);
}

export default Profile;
