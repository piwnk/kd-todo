import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from '../../style/App.css';

export default class TodoForm extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  }

  state = {
    textbox: 'Add item...'
  }

  handleAdd = () => {
    this.props.add(this.state.textbox);
    this.setState({
      textbox: 'Add item...'
    });
  }

  handleOnChange = (event) => {
    this.setState({
      textbox: event.target.value
    });
    if (event.key === 'Enter') {
      console.log(this.state.textbox);
      this.handleAdd();
    }
  }

  render = () => (
    <li
      className={style.Item}
    >
      <input
        type="text"
        placeholder={this.state.textbox}
        // onChange={this.handleOnChange}
        onKeyUp={this.handleOnChange}
        // autofocus
      />
      <button
        onClick={this.handleAdd}
      >+
      </button>
    </li>
  )
}
