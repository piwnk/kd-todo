import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from '../../style/App.css';

export default class TodoForm extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  }

  state = {
    textbox: ''
  }

  resetInput = (e) => {
    const { tagName, nodeName } = e.target;

    const node = tagName === 'INPUT' ? e.target :
      tagName === 'BUTTON' ? e.target.previousSibling :
        tagName === 'I' ? e.target.parentElement : undefined;

    node.value = '';

    this.setState({
      textbox: ''
    });
    console.log('reset');
  }

  handleAdd = (e) => {
    if (this.state.textbox) {
      this.props.add(this.state.textbox);
      this.resetInput(e);
    }
  }

  handleOnChange = (e) => {
    this.setState({
      textbox: e.target.value
    });
    if (e.key === 'Enter') {
      this.handleAdd(e);
    }
  }

  render = () => (
    <li
      className={style.Item}
    >
      <input
        type="text"
        // placeholder={this.state.textbox}
        placeholder="Add item..."
        onKeyUp={this.handleOnChange}
        // value={this.state.textbox}
      />
      <button
        onClick={this.handleAdd}
      ><i className="fa fa-plus" />
      </button>
    </li>
  )
}
