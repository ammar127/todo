import React, { useState } from 'react';
import classNames from 'classnames';
import { ENTER_KEY } from '../constants';

const Item = ({ todo, onToggle, onDestroy, onEdit, editing, onSave }) => {
  const [editText, setEditText] = useState('');
  const handleSubmit = () => {
    var val = editText.trim();
    if (val) {
      onSave(val);
    }
  };

  const handleEdit = () => {
    onEdit();
    setEditText(todo.text);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY) {
      handleSubmit();
    }
  };

  const handleChange = (event) => {
    var input = event.target;
    setEditText(input.value);
  };
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
        <label onDoubleClick={(e) => handleEdit()}>{todo.text}</label>
        <button className='destroy' onClick={onDestroy} />
      </div>
      <input
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
