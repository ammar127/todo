import { connect } from 'react-redux';
import Todo from './Todo';
import {
  getAllTodo,
  getCompletedTodo,
  getUncompletedTodo,
  getDeletedTodo,
  getAllTodoCount,
  getCompletedTodoCount,
  getUncompletedTodoCount,
  todoActions,
} from '../../store';

const mapStateToProps = (state) => ({
  all: getAllTodo(state),
  completed: getCompletedTodo(state),
  unCompleted: getUncompletedTodo(state),
  deleted: getDeletedTodo(state),
  allTodoCount: getAllTodoCount(state),
  completedCount: getCompletedTodoCount(state),
  activeTodoCount: getUncompletedTodoCount(state),
});

const mapDispatchToProps = {
  addTodo: todoActions.addTodo,
  toggleAll: todoActions.toggleAllTodo,
  toggle: todoActions.toggleTodo,
  destroy: todoActions.removeTodo,
  update: todoActions.updateTodo,
  clearCompleted: todoActions.clearCompletedTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
