import styled from 'styled-components';

const StyledFilterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-inline: 26px;
	margin-top: 20px;
	margin-inline: 26px;
	height: 48px;
	border-radius: 5px;
	font-size: 10px;
	box-shadow: 0px 0px 5px 0px ${({ $theme }) => ($theme ? 'black' : 'gray')};
	color: #9495a5;
	background-color: ${({ $theme }) => ($theme ? '#222' : 'white')};
`;

const StyledFilter = styled.div`
	display: flex;
	gap: 8px;
	font-size: 14px;
	cursor: pointer;
	font-weight: bolder;
`;

const StyledClearCompleted = styled.p`
	width: 80px;
	text-align: right;
	cursor: pointer;
	font-size: 10px;
`;

const StyledSingleFilter = styled.span`
	color: ${({ $filterActive }) => ($filterActive ? '#1779D4' : 'gray')};
`;

export {
	StyledFilterContainer,
	StyledFilter,
	StyledClearCompleted,
	StyledSingleFilter
};
