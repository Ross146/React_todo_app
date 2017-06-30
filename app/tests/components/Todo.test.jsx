var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {Todo} = require('Todo');

describe('Todo component', () => {
    it('should exist', () => {
        expect(<Todo/>).toExist()
    });

    it('should dispatch UPDATE_TODO action on click', () => {
        let todoData = {
            id: 199,
            text: 'Write todo.test.jsx test',
            completed: true,
            completedAt: 1
        };

        let action = actions.startToggleTodo(todoData.id, !todoData.completed);

        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

        let $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(action);
    })
});