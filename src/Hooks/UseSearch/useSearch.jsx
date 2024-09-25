import React, {useEffect, useReducer, useState} from 'react';
import {initialState, reducer} from "./filterReducer";

function useSearch({todos, loading}) {
    const [searchValue, setSearchValue] = useState("");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const [filterReducerState, filterDispatch] = useReducer(reducer, {...initialState, filteredTodos: todos})

    useEffect(() => {
        setFilteredTodos(getFilteredTodos())
    }, [searchValue]);

    // Save in localStorage todos and update filteredTodos
    useEffect(() => {
        if (!loading) {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
        setFilteredTodos(getFilteredTodos())
    }, [todos])

    function getFilteredTodos() {

        return todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText)
        })
    }

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