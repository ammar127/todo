import React, { createRef } from 'react';
import { ENTER_KEY } from '../constants';

function Header() {
  const inputField = createRef();
  const handleNewTodoKeyDown = (e) => {
    if (e.keyCode !== ENTER_KEY) {
      return;
    }
  };
  return (
    <header className='header'>
      <h1>todos</h1>
      <input
        ref={inputField}
        className='new-todo'
        placeholder='What needs to be done?'
        onKeyDown={(e) => handleNewTodoKeyDown(e)}
        autoFocus={true}
      />
    </header>
  );
}

export default Header;
