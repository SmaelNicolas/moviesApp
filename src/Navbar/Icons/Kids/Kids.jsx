import styled from "styled-components";

const KidsStyled = styled.div`
	width: 60px;
	height: 40px;
	background-color: purple;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Kids() {
	return (
		<KidsStyled>
			<>Kids</>
		</KidsStyled>
	);
}

export default Kids;
