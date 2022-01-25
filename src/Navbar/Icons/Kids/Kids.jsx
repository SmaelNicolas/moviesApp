import styled from "styled-components";

const KidsStyled = styled.div`
	width: 60px;
	height: 40px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;

function Kids() {
	return (
		<KidsStyled>
			<>Kids</>
		</KidsStyled>
	);
}

export default Kids;
