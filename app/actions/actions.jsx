import moment from 'moment';

import firebase, {firebaseRef} from 'app/firebase'

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

export let addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }
};

export  let startAddTodo = (text, priority) => {
    return (dispatch, getState) => {
        let todo = {
            text,
            priority,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };

        let todoRef = firebaseRef.child('todos').push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }))
        })
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