import { connect } from "react-redux";
import ToDoItem from "../components/ToDoItem";

const mapStateToProps = (state) => ({
	//items to props componentu ToDoList
	// state.todos to część stanu store'a, gdzie todos to jeden z reducerow, czyli klucz metody combineReducers
	items: state.todos,
});

export default connect(mapStateToProps)(ToDoItem);
