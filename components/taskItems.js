var React = require('react');

var TaskItem = React.createClass({
    delTask: function () {
        this.props.removeTask(
            this.props.task
        )
    },
    render: function () {
        var task = this.props.task;
        return (
            <li>{task}
                <button onClick={this.delTask}>remove</button>
            </li>
        )
    }
});

module.exports = TaskItem;
