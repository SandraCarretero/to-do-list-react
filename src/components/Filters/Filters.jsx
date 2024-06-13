import { FILTERS } from '../../constants/filters';
import {
	StyledFilter,
	StyledFilterContainer,
	StyledClearCompleted,
	StyledSingleFilter
} from './Filters.styles';

const Filters = ({ theme, todoArray, setTodoArray, filter, setFilter }) => {
	const numberOfTasks = showNumberTasks(todoArray);
	return (
		<StyledFilterContainer $theme={theme}>
			<p>{numberOfTasks}</p>
			<StyledFilter>
				<StyledSingleFilter
					onClick={() => handleFilter(FILTERS.ALL, setFilter)}
					$filterActive={filter === FILTERS.ALL}
				>
					All
				</StyledSingleFilter>
				<StyledSingleFilter
					onClick={() => handleFilter(FILTERS.ACTIVE, setFilter)}
					$filterActive={filter === FILTERS.ACTIVE}
				>
					Active
				</StyledSingleFilter>
				<StyledSingleFilter
					onClick={() => handleFilter(FILTERS.COMPLETED, setFilter)}
					$filterActive={filter === FILTERS.COMPLETED}
				>
					Completed
				</StyledSingleFilter>
			</StyledFilter>
			<StyledClearCompleted
				onClick={() => handleClick(todoArray, setTodoArray)}
			>
				Clear Completed
			</StyledClearCompleted>
		</StyledFilterContainer>
	);
};

const handleFilter = (value, setFilter) => {
	setFilter(value);
};

const showNumberTasks = todoArray => {
	const tasksLength = todoArray.filter(todo => !todo.isChecked).length;
	return tasksLength === 0 ? 'No Tasks' : `${tasksLength} Tasks`;
};

const handleClick = (todoArray, setTodoArray) => {
	const newArray = [...todoArray];
	const updatedArray = newArray.filter(todo => !todo.isChecked);
	setTodoArray(updatedArray);
};

export default Filters;
