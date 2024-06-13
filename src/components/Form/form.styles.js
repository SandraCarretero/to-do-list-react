import styled from 'styled-components';

const StyledForm = styled.form`
	width: 100%;
`;

const StyledInput = styled.input`
	width: 100%;
	height: 48px;
	border-radius: 5px;
	border: none;
	filter: drop-shadow(
		0px 0px 10px ${({ $theme }) => ($theme ? 'black' : 'gray')}
	);
	padding-left: 44px;
	color: ${({ $theme }) => ($theme ? 'white' : '#9495a5')};
	background-color: ${({ $theme }) => ($theme ? '#222' : 'white')};
	font-size: 12px;
`;

export { StyledInput, StyledForm };
