export let setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export let changeSort = (sort) => {
    return {
        type: 'CHANGE_SORT',
        sort
    }
};

export let addTodo = (text, priority) => {
    return {
        type: 'ADD_TODO',
        todo: {
            text,
            priority
        },
    }
};

export let addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
};

export  let toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
};

export  let toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};