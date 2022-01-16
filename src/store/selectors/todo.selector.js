import { createSelector } from 'reselect';

const getTodoState = (state) => state.todo;

export const getTodo = createSelector(
  getTodoState,
  (todoState) => todoState.list
);
