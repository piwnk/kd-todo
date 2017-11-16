import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from '../../style/App.css';

export default class TodoItem extends Component {
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
        >X
        </button>
      </li>
    );
  }
}
