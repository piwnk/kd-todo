import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

import style from '../../style/App.css';

export default class TodoList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]))).isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  }

  render() {
    const ListItems = this.props.items.map(item => (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        remove={this.props.remove}
      />
    ));
    // console.log(ListItems);
    return (
      <ul className={style.TodoList}>
        {ListItems}
        <TodoForm
          add={this.props.add}
        />
      </ul>
    );
  }
}
