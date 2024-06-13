import styled from 'styled-components';

const StyledHeaderContainer = styled.section`
	max-width: 500px;
	margin: auto;
	padding-top: 48px;
	padding-inline: 26px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	background-image: url('/images/bg-mobile-light.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	height: 200px;
`;

const StyledTitleContainer = styled.div`
	height: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledTitle = styled.h1`
	font-size: 30px;
	font-weight: 600;
	color: ${({ $theme }) => ($theme ? '#222' : 'white')};
	letter-spacing: 10px;
	margin: 0;
`;

export { StyledHeaderContainer, StyledTitleContainer, StyledTitle };
