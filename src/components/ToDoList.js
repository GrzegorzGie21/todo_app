import React from "react";
import ToDoItem from "../containers/ToDoItem";
import { STATUSES } from "../redux/reducers/todos";
import AddToDo from './AddToDo';

const ToDoList = ({ items, addToDo, changeStatus }) => {
	// const handleOnChange = (e) => {
	// 	const { name, value } = e.target;
	// 	const newTodo = {
	// 		[name]: value,
	// 		status: STATUSES.opened,
	// 	};
	// 	addToDo(newTodo);
	// };

	// const handleOnSubmit = (e) => {
	// 	e.preventDefault;
	// };

	return (
		<>
			<h1>TODO App</h1>
			{/* <form onSubmit={handleOnSubmit}>
				<input name="title" value={} onChange={handleOnChange} />
				<button type="submit">Add todo</button>
			</form> */}
			<h3>My todos:</h3>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item.title} ({item.status})
            <button onClick={() => changeStatus(STATUSES.opened, item.title)}>Opened</button>
            <button onClick={() => changeStatus(STATUSES.inProgress, item.title)}>In progress</button>
            <button onClick={() => changeStatus(STATUSES.closed, item.title)}>Closed</button>
					</li>
				))}
				{/* <ToDoItem /> */}
			</ul>
			<AddToDo add={addToDo} />
		</>
	);
};

export default ToDoList;
