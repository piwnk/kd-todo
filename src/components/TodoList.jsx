import React from 'react';
import PropTypes from 'prop-types';

import style from '../../style/App.css';

const TodoList = props => (
  <ul
    className={style.Title}
  >
    {props.items.map(item => (
      <li
        key={item.id}
        onClick={props.remove(item.id)}
      >
        {item.text}
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]))).isRequired,
  remove: PropTypes.func.isRequired
};

export default TodoList;
