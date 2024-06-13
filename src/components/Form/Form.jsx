import { v4 } from 'uuid';
import { StyledForm, StyledInput } from './form.styles';

const Form = ({ todoArray, setTodoArray, theme }) => {
	return (
		<StyledForm
			onSubmit={event => handleSubmit(event, todoArray, setTodoArray)}
		>
			<StyledInput
				$theme={theme}
				type='text'
				placeholder='Create a new todo...'
			/>
		</StyledForm>
	);
};

const handleSubmit = (event, todoArray, setTodoArray) => {
	event.preventDefault();

	const inputText = event.target.children[0].value;
	const newArray = [
		...todoArray,
		{ name: inputText, isChecked: false, id: v4() }
	];

	setTodoArray(newArray);
	event.target.reset();
};

export default Form;
