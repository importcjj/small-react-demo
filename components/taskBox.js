
var React = require('react');
var ReactDOM = require('react-dom');
var TaskItem = require('./taskItems');
var TaskInput = require('./taskInput');

var TaskBox = React.createClass({
    getInitialState: function () {
        return {
            tasks: []
        }
    },
    addTask: function (task) {
        if(!task){return};
        var newTasks = this.state.tasks;
        newTasks.push(task);
        this.setState({tasks: newTasks});
    },
    removeTask: function (task) {
        var taskIndex = this.state.tasks.indexOf(task);
        if( taskIndex != -1){
            var newTasks = this.state.tasks;
            newTasks.pop(taskIndex);
            this.setState({tasks: newTasks});
        }
    },
    render: function () {
        var that = this;
        return (
            <div className="task-box">
                <TaskInput addTask={that.addTask}/>
                <ul>
                {this.state.tasks.map(function(i){
                    return <TaskItem key={i}
                                task={i}
                                removeTask={that.removeTask}/>;
                })}
                </ul>
            </div>
        )
    }
});

module.exports = TaskBox;
