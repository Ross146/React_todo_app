let expect = require('expect');

let TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist()
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [{
                id: 21,
                text: 'test text',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set valid todos array', () => {
            let badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null)
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should get valid todos array', () => {
            let todos = [{
                id: 21,
                text: 'test text',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));

            let actualTodos = TodoAPI.getTodos('todos');

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterSortTodos', () => {
        let todos = [{
            id: 1,
            text: 'some text 1',
            priority: 1,
            createdAt: 2,
            completed: true
        },{
            id: 2,
            text: 'some text 2',
            priority: 2,
            createdAt: 1,
            completed: false
        },{
            id: 3,
            text: 'text 3',
            priority: 3,
            createdAt: 3,
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            let filteredTodos = TodoAPI.filterSortTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return non-completed todos when showCompleted is false', () => {
            let filteredTodos = TodoAPI.filterSortTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by created at', () => {
            let filterSortTodos = TodoAPI.filterSortTodos(todos, true, '', 1);
            expect(filterSortTodos[0].createdAt).toBe(1);
        });

        it('should sort by name', () => {
            let filterSortTodos = TodoAPI.filterSortTodos(todos, true, '', 2);
            expect(filterSortTodos[0].text).toBe('some text 1');
        });

        it('should sort by priority', () => {
            let filterSortTodos = TodoAPI.filterSortTodos(todos, true, '', 3);
            expect(filterSortTodos[0].priority).toBe(3);
        });

        it('should sort by completed status', () => {
            let filterSortTodos = TodoAPI.filterSortTodos(todos, true, '', 4);
            expect(filterSortTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            let filteredTodos = TodoAPI.filterSortTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if search input is empty', () => {
            let filteredTodos = TodoAPI.filterSortTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    })
});

