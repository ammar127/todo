import { TODO_CONSTANTS } from '../app.constant';

export const todoActions = {
  addTodo: (text) => {
    return {
      type: TODO_CONSTANTS.ADD_TODO,
      text,
    };
  },
  removeTodo: (id) => {
    return {
      type: TODO_CONSTANTS.REMOVE_TODO,
      id,
    };
  },
  toggleTodo: (id) => {
    return {
      type: TODO_CONSTANTS.TOGGLE_TODO,
      id,
    };
  },
  toggleAllTodo: (checked) => {
    return {
      type: TODO_CONSTANTS.TOGGLE_ALL_TODO,
      checked,
    };
  },
  clearCompletedTodo: () => {
    return {
      type: TODO_CONSTANTS.CLEAR_COMPLETED_TODO,
    };
  },
  editTodo: (id) => {
    return {
      type: TODO_CONSTANTS.EDIT_TODO,
      id,
    };
  },
  updateTodo: (id, text) => {
    return {
      type: TODO_CONSTANTS.UPDATE_TODO,
      id,
      text,
    };
  },
};
