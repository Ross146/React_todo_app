let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');

let TodoApp = require('TodoApp');
let actions = require('actions');
let store = require('configureStore').configure();
let TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);

