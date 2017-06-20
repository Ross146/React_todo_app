let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jquery');
let TestUtils = require('react-addons-test-utils');

let {AddTodo} = require('AddTodo');

describe('AddTodo component', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO with valid text and priority', () => {
        let todoText = 'Check mail';
        let todoPriority = "2";
        let action = {
            type: 'ADD_TODO',
            todo: {
                text: todoText,
                priority: todoPriority
            }
        };
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        addTodo.refs.todoPriority.value = todoPriority;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid todo text', () => {
        let todoText = '';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    })
});