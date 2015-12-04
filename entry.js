
require('./index.css')
var React = require('react');
var ReactDOM = require('react-dom');
var TaskBox = require('./components/taskBox');

ReactDOM.render(
    <TaskBox/>,
    document.getElementById('hello-react')
);
