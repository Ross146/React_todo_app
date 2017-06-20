let redux = require('redux');
let {searchTextReducer, sortReducer, showCompletedReducer, todosReducer} = require('reducers');

export let configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        sort: sortReducer,
        todos: todosReducer
    });

    let store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension(): f => f
    ));

    return store;
};