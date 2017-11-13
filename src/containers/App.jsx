import React, { Component } from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

import style from '../../style/App.css';

export default class extends Component {
  state = {
    data: [{
      id: 1,
      text: 'clean room'
    }, {
      id: 2,
      text: 'wash the dishes'
    }, {
      id: 3,
      text: 'feed my cat'
    }]
  }

  addTodo = (val) => {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }

  removeTodo = (id) => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({
      data: remainder
    });
  }

  render = () => (
    <div
      className={style.TodoApp}
    >
      <Title
        title={`My TODOs (${this.state.data.length})`}
      />
      {<TodoList items={this.state.data} />}
    </div>
  )
}
