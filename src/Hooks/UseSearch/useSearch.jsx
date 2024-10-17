import React, {useEffect, useReducer, useState} from 'react';
import {initialState, reducer} from "./filterReducer";

function useSearch({todos, loading}) {

    const [filterReducerState, filterDispatch] = useReducer(reducer, {...initialState, filteredTodos: todos})


    // // Save in localStorage todos and update filteredTodos
    // useEffect(() => {
    //     if (!loading) {
    //         localStorage.setItem('todos', JSON.stringify(todos))
    //     }
    //     setFilteredTodos(getFilteredTodos())
    // }, [todos])

    return {
        filterReducerState,
        filterDispatch
    };
}

export {useSearch};