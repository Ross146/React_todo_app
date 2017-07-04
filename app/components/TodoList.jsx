let React = require('react');
let {connect} = require('react-redux');
import Todo from 'Todo';
let TodoAPI = require('TodoAPI');

export let TodoList = React.createClass({
    render: function () {
        let {todos, showCompleted, searchText, sort} = this.props;
        let renderTodos = () => {
            let filterTodos = TodoAPI.filterSortTodos(todos, showCompleted, searchText, sort);

            if (filterTodos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do</p>
                )
            }
            return filterTodos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                )
            })
        };
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect(
    (state) => {
        return state;
    }
)(TodoList);