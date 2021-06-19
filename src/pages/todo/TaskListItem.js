import React, { Component }  from 'react';
import tasks from '../../utils/tasks';
import ModalWindowShell from './ModalWindowShell';
import TaskForm from './TaskForm';
import PropTypes from 'prop-types';

export default class TaskListItem extends Component {
  static get propTypes() { 
    return { 
      task: PropTypes.any,
    }; 
  }

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
  }
  
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  deleteTask() {
    const id = this.props.task.id;
    for (let index = 0; index < tasks.length; index++) {
      const task = tasks[index];
      if (task.id === id) {
        tasks.splice(index, 1);
      }
    }
    console.log(tasks);
  }

  render() {
    return <div>
      <input type="checkbox"/>
      <p>{this.props.task.title}</p>
      <button onClick={this.toggleHidden.bind(this)}>Edit - it is link</button>
      {
        !this.state.isHidden && 
        <ModalWindowShell>
          <TaskForm task={this.props.task}/>
        </ModalWindowShell>
      }
      <button onClick={this.deleteTask.bind(this)}>Delete</button>
    </div>;
  }
}
