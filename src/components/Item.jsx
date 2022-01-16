import React, { createRef } from 'react';
import classNames from 'classnames';
import { ALL_TODOS } from '../constants';

const Item = (props) => {
  const editField = createRef();
  return (
    <li
      className={classNames({
        completed: this.props.todo.completed,
        editing: this.props.editing,
      })}
    >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={this.props.todo.completed}
          onChange={this.props.onToggle}
        />
        <label onDoubleClick={(e) => this.handleEdit()}>
          {this.props.todo.title}
        </label>
        <button className='destroy' onClick={this.props.onDestroy} />
      </div>
      <input
        ref={editField}
        className='edit'
        value={this.state.editText}
        onBlur={(e) => this.handleSubmit(e)}
        onChange={(e) => this.handleChange(e)}
        onKeyDown={(e) => this.handleKeyDown(e)}
      />
    </li>
  );
};

export default Item;
