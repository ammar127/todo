import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Footer, Item } from './components';
import './App.css';
import {
  ALL_TODOS,
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
  const [text, setText] = useState('');
  const list =
    nowShowing === ALL_TODOS
      ? all
      : nowShowing === COMPLETED_TODOS
      ? completed
      : nowShowing === ACTIVE_TODOS
      ? unCompleted
      : deleted;

  const handleChange = (event) => {
    var input = event.target;
    setText(input.value);
  };
  const handleNewTodoKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    var val = text.trim();

    if (val) {
      setText('');
      addTodo(val);
    }
  };

  const handleToggleAll = (event) => {
    var target = event.target;
    var checked = target.checked;
    toggleAll(checked);
  };

  const handleToggle = (todoToToggle) => {
    toggle(todoToToggle.id);
  };

  const handleDestroy = (todo) => {
    destroy(todo.id);
  };

  const handleEdit = (todo) => {
    setEditing(todo.id);
  };

  const handleSave = (todo, text) => {
    update(todo.id, text);
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
        onSave={(text) => handleSave(todo, text)}
      />
    );
  });

  const main = (
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

  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          onKeyDown={(e) => handleNewTodoKeyDown(e)}
          onChange={(e) => handleChange(e)}
          value={text}
          autoFocus={true}
        />
      </header>
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
