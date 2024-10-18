import React, {useEffect, useReducer, useRef, useState} from 'react';
import {initialState, reducer} from "./filterReducer";

function useSearch({todos, loading}) {

    const [filterReducerState, filterDispatch] = useReducer(reducer, {...initialState, filteredTodos: todos})
    const [searchValue, setSearchValue] = useState("");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        let searchedTodos;
        if (searchValue.length < 1) {
            searchedTodos = todos;
        } else {
            searchedTodos = todos.filter(todo => {
                const todoText = todo.text.toLowerCase();
                const searchText = searchValue.toLowerCase();
                return todoText.includes(searchText);
            });
        }
        setFilteredTodos(searchedTodos)
    }, [searchValue, todos]);

    return {
        searchValue,
        setSearchValue,
        filteredTodos,
        setFilteredTodos,
        filterReducerState,
        filterDispatch
    };
}

export {useSearch};