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

    describe('sortReducer', () => {
        it('should change sort type', () => {
            let action = {
                type: 'CHANGE_SORT',
                sort: 2
            };

            let res = reducers.sortReducer(df(1), df(action));

            expect(res).toEqual(action.sort);
        })
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                todo: {
                    id: '13423',
                    completedAt: 12423,
                    completed: false,
                    text: 'test text todo',
                    priority: 2
                }
            };
            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should update todo', () => {
            let todos = [{
                id: 123,
                text: 'text',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];

            let updates = {
                completed: false,
                completedAt: null
            };

            let action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };

            let res = reducers.todosReducer(todos, action);

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
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