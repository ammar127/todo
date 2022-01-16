import { createSelector } from 'reselect';

const getTodoState = (state) => state.todo;

export const getAllTodo = createSelector(getTodoState, (todoState) =>
  todoState.list.filter((todo) => !todo.isDeleted)
);
// get completed todo
export const getCompletedTodo = createSelector(getTodoState, (todoState) =>
  todoState.list.filter((todo) => todo.completed && !todo.isDeleted)
);
// get uncompleted todo
export const getUncompletedTodo = createSelector(getTodoState, (todoState) =>
  todoState.list.filter((todo) => !todo.completed && !todo.isDeleted)
);
// get deleted todo
export const getDeletedTodo = createSelector(getTodoState, (todoState) =>
  todoState.list.filter((todo) => todo.isDeleted)
);

// get all todo
export const getAllTodoCount = createSelector(
  getTodoState,
  (todoState) => todoState.list.filter((todo) => !todo.isDeleted).length
);
// get completed todo count
export const getCompletedTodoCount = createSelector(
  getTodoState,
  (todoState) =>
    todoState.list.filter((todo) => todo.completed && !todo.isDeleted).length
);
// get uncompleted todo count
export const getUncompletedTodoCount = createSelector(
  getTodoState,
  (todoState) =>
    todoState.list.filter((todo) => !todo.completed && !todo.isDeleted).length
);
