import { useState } from 'react';
import Header from '../Header/Header.jsx';
import Todos from '../Todos/Todos.jsx';
import {
	StyledMainContainer,
	StyledTodoContianer,
	StyledWidthContainer
} from './main-container.styles.js';
import Filters from '../Filters/Filters.jsx';
import { v4 } from 'uuid';
import { FILTERS } from '../../constants/filters.js';

const MainContainer = () => {
	const [todoArray, setTodoArray] = useState([
		{ name: 'Añade una nueva tarea', isChecked: false, id: v4() }
	]);
	const [filter, setFilter] = useState(FILTERS.ALL);
	const [theme, setTheme] = useState(false);

	return (
		<StyledMainContainer $theme={theme}>
			<StyledWidthContainer>
				<Header
					todoArray={todoArray}
					setTodoArray={setTodoArray}
					theme={theme}
					setTheme={setTheme}
				/>
				<StyledTodoContianer>
					<Todos
						theme={theme}
						todoArray={todoArray}
						setTodoArray={setTodoArray}
						filter={filter}
						setFilter={setFilter}
					/>
				</StyledTodoContianer>
				<Filters
					theme={theme}
					todoArray={todoArray}
					setTodoArray={setTodoArray}
					filter={filter}
					setFilter={setFilter}
				/>
			</StyledWidthContainer>
		</StyledMainContainer>
	);
};

export default MainContainer;
