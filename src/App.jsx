import React, { createRef, useState } from 'react';
import { connect } from 'react-redux';
import { Footer, Header, Item } from './components';
import './App.css';
import {
  ALL_TODOS,
  UN,
  COMPLETED_TODOS,
  ENTER_KEY,
  ACTIVE_TODOS,
} from './constants';
import {
  getAllTodo,
  getCompletedTodo,
  getUncompletedTodo,
  getDeletedTodo,
  getAllTodoCount,
  getCompletedTodoCount,
  getUncompletedTodoCount,
  todoActions,
} from './store';
import { useRef } from 'react';

function App({
  addTodo,
  toggleAll,
  toggle,
  destroy,
  update,
  clearCompleted,

  all,
  completed,
  unCompleted,
  deleted,
  allTodoCount,
  completedCount,
  activeTodoCount,
}) {
  const [editing, setEditing] = useState(null);
  const [nowShowing, setNowShowing] = useState(ALL_TODOS);
  const newTodoField = useRef();
  const list =
    nowShowing === ALL_TODOS
      ? all
      : nowShowing === COMPLETED_TODOS
      ? completed
      : nowShowing === ACTIVE_TODOS
      ? unCompleted
      : deleted;
  const handleNewTodoKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = newTodoField.value.trim();

    if (val) {
      addTodo(val);
      newTodoField.value = '';
    }
  };

  const handleToggleAll = (event) => {
    var target = event.target;
    var checked = target.checked;
    toggleAll(checked);
  };

  const handleToggle = (todoToToggle) => {
    toggle(todoToToggle);
  };

  const handleDestroy = (todo) => {
    destroy(todo);
  };

  const handleEdit = (todo) => {
    setEditing(todo.id);
  };

  const handleSave = (text) => {
    update(editing, text);
    setEditing(null);
  };

  const cancel = () => {
    setEditing(null);
  };

  const handleClearCompleted = () => {
    clearCompleted();
  };

  const todoItems = list.map((todo) => {
    return (
      <Item
        key={todo.id}
        todo={todo}
        onToggle={() => handleToggle(todo)}
        onDestroy={() => handleDestroy(todo)}
        onEdit={() => handleEdit(todo)}
        editing={editing === todo.id}
        onSave={() => handleSave(todo)}
        onCancel={cancel}
      />
    );
  });

  const main = () => {
    const activeTodoCount = 0;
    return (
      <section className='main'>
        <input
          className='toggle-all'
          type='checkbox'
          onChange={(e) => handleToggleAll(e)}
          checked={activeTodoCount === 0}
        />
        <label htmlFor='toggle-all'>Mark all as complete</label>
        <ul className='todo-list'>{todoItems}</ul>
      </section>
    );
  };
  return (
    <section className='todoapp'>
      <Header
        newTodoField={newTodoField}
        handleNewTodoKeyDown={handleNewTodoKeyDown}
      />
      {main}
      <Footer
        count={activeTodoCount}
        completedCount={completedCount}
        nowShowing={nowShowing}
        onClearCompleted={() => handleClearCompleted()}
        onShow={setNowShowing}
      />
    </section>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
