import React, {useEffect, useState} from 'react';

function useSearch({todos, loading}) {
    const [searchValue, setSearchValue] = useState("");
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        all: true,
        pending: false,
        completed: false
    })


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
        filterOptions,
        setFilterOptions
    };
}

export {useSearch};