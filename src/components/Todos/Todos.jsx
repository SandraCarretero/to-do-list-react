import {
	StyledCheckbox,
	StyledCross,
	StyledName,
	StyledTodo
} from './Todos.styles';

const Todos = ({ theme, todoArray, setTodoArray, filter }) => {
	const filteredArray = filterArray(filter, todoArray);

	return filteredArray.map(todo => (
		<StyledTodo $theme={theme} key={todo.id}>
			<StyledName $isChecked={todo.isChecked}>
				<StyledCheckbox
					onChange={event =>
						handleCheck(event, todo.id, todoArray, setTodoArray)
					}
					type='checkbox'
					name={todo.name}
					checked={todo.isChecked}
					id={todo.id}
				/>
				<p>{todo.name}</p>
			</StyledName>

			<StyledCross
				onClick={event =>
					handleDelete(event.target.id, todoArray, setTodoArray)
				}
				src='/images/icon-cross.svg'
				alt='cross'
				id={todo.id}
			/>
		</StyledTodo>
	));
};

const handleCheck = (event, todoId, todoArray, setTodoArray) => {
	const newArray = [...todoArray];
	const updateArray = newArray.map(todo =>
		todo.id === todoId ? { ...todo, isChecked: event.target.checked } : todo
	);
	setTodoArray(updateArray);
};

const filterArray = (filter, todoArray) => {
	if (filter === 'all') return todoArray;
	if (filter === 'active')
		return [...todoArray].filter(todo => !todo.isChecked);
	if (filter === 'completed')
		return [...todoArray].filter(todo => todo.isChecked);
};

const handleDelete = (id, todoArray, setTodoArray) => {
	const newArray = [...todoArray];
	const updatedArray = newArray.filter(todo => todo.id !== id);
	setTodoArray(updatedArray);
};

export default Todos;
