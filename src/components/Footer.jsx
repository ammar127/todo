import classNames from 'classnames';
import React from 'react';
import {
  ALL_TODOS,
  ACTIVE_TODOS,
  COMPLETED_TODOS,
  DELETED_TODOS,
} from '../constants';

function Footer({
  count,
  completedCount,
  onClearCompleted,
  nowShowing,
  onShow,
}) {
  var activeTodoWord = count === 0 ? 'item' : 'items';
  var clearButton = null;

  if (completedCount > 0) {
    clearButton = (
      <button className='clear-completed' onClick={onClearCompleted}>
        Clear completed
      </button>
    );
  }

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{count}</strong> {activeTodoWord} left
      </span>
      <ul className='filters'>
        <li>
          <button
            onClick={() => onShow(ALL_TODOS)}
            className={classNames({ selected: nowShowing === ALL_TODOS })}
          >
            All
          </button>
        </li>{' '}
        <li>
          <button
            onClick={() => onShow(ACTIVE_TODOS)}
            className={classNames({ selected: nowShowing === ACTIVE_TODOS })}
          >
            Active
          </button>
        </li>{' '}
        <li>
          <button
            onClick={() => onShow(COMPLETED_TODOS)}
            className={classNames({ selected: nowShowing === COMPLETED_TODOS })}
          >
            Completed
          </button>
        </li>
        <li>
          <button
            onClick={() => onShow(DELETED_TODOS)}
            className={classNames({ selected: nowShowing === DELETED_TODOS })}
          >
            Deleted
          </button>
        </li>
      </ul>
      {clearButton}
    </footer>
  );
}

export default Footer;
