let expect = require('expect');
let df = require('deep-freeze-strict');

let reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducers', () => {
        it('should set searchText', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            let res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted status', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            let res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                todo: {
                    text: 'test text todo',
                    priority: 2
                }
            };
            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.todo.text);
        });

        it('should toggle todo by id', () => {
            let todos = [{
                id: 123,
                text: 'text',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];

            let action = {
                type: 'TOGGLE_TODO',
                id: todos[0].id
            };

            let res = reducers.todosReducer(todos, action);

            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });

        it('should add existing todos', () => {
            let todos = [{
                id: 111,
                text: 'something',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];

            let action = {
                type: 'ADD_TODOS',
                todos
            };
            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});