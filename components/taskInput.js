var React = require('react');

var TaskInput = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    var newTask = this.refs.taskInput.value;
    this.props.addTask(newTask);
  },
  render: function() {
    return (
        <div>
          <form onSubmit={this.handleSubmit} >
              <input ref="taskInput" type="text" />
              <button>ADD</button>
          </form>
        </div>
    )
  }
});


module.exports = TaskInput;
