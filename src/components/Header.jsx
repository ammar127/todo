import React from 'react';

function Header({ newTodoField, handleNewTodoKeyDown }) {
  return (
    <header className='header'>
      <h1>todos</h1>
      <input
        ref={newTodoField}
        className='new-todo'
        placeholder='What needs to be done?'
        onKeyDown={(e) => handleNewTodoKeyDown(e)}
        autoFocus={true}
      />
    </header>
  );
}

export default Header;
