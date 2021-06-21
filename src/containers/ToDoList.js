import { connect } from "react-redux";
import ToDoList from "../components/ToDoList";
import { addToDo, changeStatus } from "../redux/actions/action";

const mapStateToProps = (state) => ({
	//items to props componentu ToDoList
	// state.todos to część stanu store'a, gdzie todos to jeden z reducerow, czyli klucz metody combineReducers
	items: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addToDo: (todo) => dispatch(addToDo(todo)),
  changeStatus: (status, title) => dispatch(changeStatus(status, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
