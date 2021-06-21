export const ADD_TODO = "ADD_TODO";
export const CHANGE_STATUS = "CHANGE_STATUS";

export const addToDo = (newToDo) => ({
	type: ADD_TODO,
	payload: newToDo,
});

export const changeStatus = (status, title) => ({
	type: CHANGE_STATUS,
	payload: { status, title },
});
