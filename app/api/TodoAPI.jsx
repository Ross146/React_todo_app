module .exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterSortTodos: function (todos, showCompleted, searchText, sort) {
        let filteredSortedTodos = todos;

        // Filter by showCompleted
        filteredSortedTodos = filteredSortedTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        //Filter by searchText
        filteredSortedTodos = filteredSortedTodos.filter((todo) => {
            let text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        if (sort === 1) {
            filteredSortedTodos.sort((a, b) => {
                if (a.createdAt > b.createdAt) {
                    return 1;
                } else {
                    return -1;
                }
            });
        } else if (sort === 2) {
            filteredSortedTodos.sort((a, b) => {
                if (a.text > b.text) {
                    return 1;
                } else {
                    return -1;
                }
            });
        } else if (sort === 3) {
            filteredSortedTodos.sort((a, b) => {
                if (a.priority > b.priority) {
                    return 1;
                } else {
                    return -1;
                }
            });
        } else if (sort === 4) {
            filteredSortedTodos.sort((a, b) => {
                if (!a.completed && b.completed) {
                    return -1;
                } else if (a.completed && !b.completed) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }


        return  filteredSortedTodos;
    }
};