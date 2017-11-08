import React, { Component } from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import style from '../../style/App.css';

export default class extends Component {
   state = {
      data: []
   }

   addTodo = (val) => {
      const todo = {
         text: val,
         id: uuid.v4()
      };
      const data = [...this.state.data, todo];
      this.setState({ data });

      // this.setState(current => {
      //    data: [...current, todo]
      // })
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
         <Title title={`My TODOs (${this.state.data.length})`} />
      </div>
   )
}
