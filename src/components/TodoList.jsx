import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from '../../style/App.css';


class ListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired
  }

  render() {
    return (
      <li
        className={style.Item}
      >
        <p>{this.props.text}</p>
        <button
          onClick={() => this.props.remove(this.props.id)}
        >
          X
        </button>
      </li>
    );
  }
}


export default class TodoList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]))).isRequired,
    remove: PropTypes.func.isRequired
  }

  render() {
    const ListItems = this.props.items.map(item => (
      <ListItem
        key={item.id}
        id={item.id}
        text={item.text}
        remove={this.props.remove}
      />
    ));
    return (
      <ul>
        {ListItems}
      </ul>
    );
  }
}
