import React from 'react';

function Main() {
  const todoItems = [];
  const activeTodoCount = 0;
  return (
    <section className='main'>
      <input
        id='toggle-all'
        className='toggle-all'
        type='checkbox'
        onChange={(e) => this.toggleAll(e)}
        checked={activeTodoCount === 0}
      />
      <label htmlFor='toggle-all'>Mark all as complete</label>
      <ul className='todo-list'>{todoItems}</ul>
    </section>
  );
}

export default Main;
