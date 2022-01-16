import React from 'react';
import { connect } from 'react-redux';
import { Item } from './item';

const list = ({ list, editing, toggle, destroy, edit, save, cancel }) => {
  var todoItems = list.map((todo) => {
    return (
      <Item
        key={todo.id}
        todo={todo}
        onToggle={() => toggle(todo)}
        onDestroy={() => destroy(todo)}
        onEdit={() => edit(todo)}
        editing={editing === todo.id}
        onSave={() => save(todo)}
        onCancel={() => cancel()}
      />
    );
  });
  return <div></div>;
};
export default list;
