import styled, { keyframes } from "styled-components";

function Loading() {
	return (
		<DivRipple>
			<DivWrapper>
				<DivCenter></DivCenter>
			</DivWrapper>
		</DivRipple>
	);
}

const ripple = keyframes`
    0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const DivRipple = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const DivWrapper = styled.div`
	border: 4px solid #fff;
	opacity: 1;
	border-radius: 50%;
	animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

const DivCenter = styled.div`
	animation-delay: -0.5s;
`;

export default Loading;
