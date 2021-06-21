import React, { useState } from "react";

const AddToDo = ({ add }) => {
	const [todo, setTodo] = useState({
		title: "",
	});

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setTodo((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		add(todo);
  };
  
	return (
		<form onSubmit={handleOnSubmit}>
			<input name="title" value={todo.title} onChange={handleOnChange} />
			<button type="submit">Add todo</button>
		</form>
	);
};

export default AddToDo;
