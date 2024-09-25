import React, {useEffect, useReducer} from 'react';
import './TodoFilter.css';
import {actionTypes} from "../../Hooks/UseSearch/filterReducer";

function TodoFilter({
                        darkMode,
                        todos,
                        setFilteredTodos,
                        filterReducerState,
                        filterDispatch
                    }) {

    useEffect(() => {
        setFilteredTodos(filterReducerState.filteredTodos)
    }, [filterReducerState]);

    function filterTodos(filterName) {
        filterDispatch({
            type: filterName,
            payload: {todos}
        })
    }

    return (
        <div className="todo-filter-container">
            <button
                id="todo-filter__option--all"
                className={`todo-filter__option ${darkMode
                    ? `todo-filter__option--dark-mode ${filterReducerState.all ? 'dark-mode--active' : ''}`
                    : `todo-filter__option--light-mode ${filterReducerState.all ? 'light-mode--active' : ''}
                    `}`}
                onClick={() => filterTodos(actionTypes.all)}
            >Todas
            </button>

            <button
                id="todo-filter__option--pending"
                className={`todo-filter__option ${darkMode
                    ? `todo-filter__option--dark-mode ${filterReducerState.pending ? 'dark-mode--active' : ''}`
                    : `todo-filter__option--light-mode ${filterReducerState.pending ? 'light-mode--active' : ''}
                    `}`}
                onClick={() => filterTodos(actionTypes.pending)}
            >Pendientes
            </button>

            <button
                id="todo-filter__option--completed"
                className={`todo-filter__option ${darkMode
                    ? `todo-filter__option--dark-mode ${filterReducerState.completed ? 'dark-mode--active' : ''}`
                    : `todo-filter__option--light-mode ${filterReducerState.completed ? 'light-mode--active' : ''}
                    `}`}
                onClick={() => filterTodos(actionTypes.completed)}
            >Completadas
            </button>

        </div>
    );
}

export default TodoFilter;