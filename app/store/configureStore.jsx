import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, sortReducer, showCompletedReducer, todosReducer} from 'reducers';

export let configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        sort: sortReducer,
        todos: todosReducer
    });

    let store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension(): f => f
    ));

    return store;
};