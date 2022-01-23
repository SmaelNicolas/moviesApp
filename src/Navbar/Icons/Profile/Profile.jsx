import styled from "styled-components";

const ProfileStyled = styled.div`
	width: 40px;
	height: 40px;
	background-color: coral;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Profile() {
	return (
		<ProfileStyled>
			<>Prof</>
		</ProfileStyled>
	);
}

export default Profile;
