import styled from 'styled-components';

const StyledMainContainer = styled.main`
	background-color: ${({ $theme }) => ($theme ? '#222' : 'white')};
	height: 100vh;
`;

const StyledWidthContainer = styled.section`
	max-width: 500px;
	margin: auto;
`;

const StyledTodoContianer = styled.section`
	margin-top: -26px;
	margin-inline: 26px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0px 0px 10px 0px black;
	background-color: #111;
`;

export { StyledMainContainer, StyledWidthContainer, StyledTodoContianer };
