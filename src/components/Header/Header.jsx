import Form from '../Form/Form';
import {
	StyledTitle,
	StyledHeaderContainer,
	StyledTitleContainer
} from './header.styles';

const Header = ({ todoArray, setTodoArray, theme, setTheme }) => {
	const changeImg = !theme ? '/images/icon-moon.svg' : '/images/icon-sun.svg';

	return (
		<StyledHeaderContainer>
			<StyledTitleContainer>
				<StyledTitle $theme={theme}>TODO</StyledTitle>
				<img onClick={() => setTheme(!theme)} src={changeImg} alt='' />
			</StyledTitleContainer>
			<Form todoArray={todoArray} setTodoArray={setTodoArray} theme={theme} />
		</StyledHeaderContainer>
	);
};

export default Header;
