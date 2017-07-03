import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
let expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase';
let actions = require('actions');

let createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        let res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        let action = {
            type: 'ADD_TODO',
            todo: {
                id: '1231415f',
                text: 'Thing to do',
                priority: 2,
                completed: false,
                createdAt: 0
            }
        };
        let res = actions.addTodo(action.todo);

        expect(res).toEqual(action);
    });

    it('should generate add todos action', () => {
        let action = {
            type: 'ADD_TODOS',
            todos: [{
                id: 111,
                text: 'something',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }]
        };
        let res = actions.addTodos(action.todos);

        expect(res).toEqual(action);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'My todo item';
        const todoPriority = 2;

        store.dispatch(actions.startAddTodo(todoText, todoPriority)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText,
                priority: todoPriority
            });
            done();
        }).catch(done);
    });

    it('should generate toggle show completed action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate update todo action', () => {
        let action = {
            type: 'UPDATE_TODO',
            id: '123',
            updates: {completed: false}
        };
        let res = actions.updateTodo(action.id, action.updates);

        expect(res).toEqual(action);
    });


    describe('Tests with firebase todos', () => {
        var testTodoRef;

        beforeEach((done) => {
            testTodoRef = firebaseRef.child('todos').push();

            testTodoRef.set({
                text: 'Something to do',
                completed: false,
                createdAt: 23234
            }).then(() => done());
        });

        afterEach((done) => {
            testTodoRef.remove().then(() => done())
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });

                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                //
                expect(mockActions[0].updates.completedAd).toExist();

                done();
            }, done)
        });
    })
});