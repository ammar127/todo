import React, { createRef, useState } from 'react';
import classNames from 'classnames';
import { ALL_TODOS } from '../constants';

const Item = ({ onDestroy, onToggle, todo, editing }) => {
  const editField = createRef();
  const [editText, setEditText] = useState('');
  const handleEdit = () => {};
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleKeyDown = () => {};
  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing: editing,
      })}
    >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={todo.completed}
          onChange={onToggle}
        />
        <label onDoubleClick={(e) => handleEdit()}>{todo.title}</label>
        <button className='destroy' onClick={onDestroy} />
      </div>
      <input
        ref={editField}
        className='edit'
        value={editText}
        onBlur={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </li>
  );
};

export default Item;
