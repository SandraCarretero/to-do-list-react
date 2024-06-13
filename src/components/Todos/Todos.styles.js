import styled from 'styled-components';

const StyledTodo = styled.div`
	display: flex;
	border-bottom: 1px solid ${({ $theme }) => ($theme ? 'black' : 'gray')};
	align-items: center;
	justify-content: space-between;
	margin: 0;
	color: #9495a5;
	background-color: ${({ $theme }) => ($theme ? '#222' : 'white')};
	font-size: 12px;
	height: 48px;
	padding-inline: 20px;
`;

const StyledName = styled.div`
	display: flex;
	text-decoration: ${({ $isChecked }) =>
		$isChecked ? 'line-through' : 'none'};
`;

const StyledCheckbox = styled.input`
	width: 20px;
	margin-right: 12px;
	margin-left: 0;
	cursor: pointer;
`;

const StyledCross = styled.img`
	cursor: pointer;
`;

export { StyledTodo, StyledCheckbox, StyledName, StyledCross };
