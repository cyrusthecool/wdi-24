import React, { PureComponent as Component } from 'react';

import Task from './Task.js';

export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'Task one' },
      { _id: 2, text: 'Task two' },
      { _id: 3, text: 'Task three' },
    ];
  }

  renderTasks() {
    return this.getTasks().map( (task) => (
      <Task key={task._id} task={task} />
    ))
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
