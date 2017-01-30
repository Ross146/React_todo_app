var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist()
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 21,
                text: 'test text',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set valid todos array', () => {
            var badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null)
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should get valid todos array', () => {
            var todos = [{
                id: 21,
                text: 'test text',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos('todos');

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: 'some text 1',
            completed: true
        },{
            id: 2,
            text: 'some text 2',
            completed: false
        },{
            id: 3,
            text: 'text 3',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return non-completed todos when showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if search input is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    })
});
