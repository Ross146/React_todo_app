let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');

let TodoApp = require('TodoApp');
let {Login} = require('Login');
let actions = require('actions');
let store = require('configureStore').configure();
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

store.dispatch(actions.startAddTodos());

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="todos" component={TodoApp}/>
                <IndexRoute component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

