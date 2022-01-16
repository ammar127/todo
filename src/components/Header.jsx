import React, { createRef } from 'react';

function header() {
  const inputField = createRef();
  return (
    <input
      ref={inputField}
      className='new-todo'
      placeholder='What needs to be done?'
      onKeyDown={(e) => this.handleNewTodoKeyDown(e)}
      autoFocus={true}
    />
  );
}

export default header;
