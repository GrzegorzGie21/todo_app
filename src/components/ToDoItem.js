import React from "react";

const ToDoItem = ({ items }) =>
	items.map((todo, index) => (
		<li key={index}>
			{todo.title} ({todo.status})
		</li>
	));

  export default ToDoItem;