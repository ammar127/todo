import { TODO_INITIAL_STATE, TODO_CONSTANTS } from '../app.constant';
import { v4 as uuidv4 } from 'uuid';
export const todoReducer = (state = TODO_INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_CONSTANTS.ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: uuidv4(),
            text: action.text,
            completed: false,
            isDeleted: false,
          },
        ],
      };
    case TODO_CONSTANTS.REMOVE_TODO:
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              isDeleted: true,
            };
          }
          return todo;
        }),
      };
    case TODO_CONSTANTS.TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    case TODO_CONSTANTS.TOGGLE_ALL_TODO:
      return {
        ...state,
        list: state.list.map((todo) => {
          return {
            ...todo,
            completed: action.completed,
          };
        }),
      };
    case TODO_CONSTANTS.CLEAR_COMPLETED_TODO:
      return {
        ...state,
        list: state.list.map((todo) => {
          return {
            ...todo,
            isDeleted: todo.completed,
          };
        }),
      };
    case TODO_CONSTANTS.UPDATE_TODO:
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              text: action.text,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
