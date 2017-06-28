let expect = require('expect');
let actions = require('actions');

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

    it('should generate toggle show completed action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        let action = {
            type: 'TOGGLE_TODO',
            id: '123'
        };
        let res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });
});