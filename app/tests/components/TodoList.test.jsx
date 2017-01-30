var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo =require('Todo');

describe('TodoList component', () => {
    it('should exist', () => {
        expect(<TodoList/>).toExist()
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something'
        }, {
            id: 2,
            text: 'Work !'
        }];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length)
    })
});