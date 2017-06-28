let React = require('react');
let {connect} = require('react-redux');
let actions = require('actions');

export let AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        let {dispatch} = this.props;
        let todoText = this.refs.todoText.value;
        let todoPriority = +this.refs.todoPriority.value;

        if(todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.startAddTodo(todoText, todoPriority));
        } else {
            this.refs.todoText.focus();
        }

    },

    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                    <select ref="todoPriority">
                        <option value="1">low</option>
                        <option selected value="2">normal</option>
                        <option value="3">high</option>
                    </select>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);