import { ADD_TODO, CHANGE_STATUS } from "../actions/action";

export const STATUSES = {
	opened: "opened",
	inProgress: "in progress",
	closed: "close",
};

const initState = [
	{
		title: "Pierwszy task",
		status: STATUSES.opened,
		// date: new Date()
	},
];

const todos = (state = initState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{ title: action.payload.title, status: STATUSES.opened },
			];
		case CHANGE_STATUS:
			const copy = [...state];
			const index = copy.findIndex(
				(todo) => todo.title === action.payload.title,
			);
			copy[index].status = action.payload.status;
			return copy;
		default:
			return state;
	}
};

export default todos;
