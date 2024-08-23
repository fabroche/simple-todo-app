import React from 'react';
import './TodoFilter.css';

function TodoFilter({
                        darkMode,
                        filterOptions,
                        setFilterOptions,
                        todos,
                        filteredTodos,
                        setFilteredTodos
                    }) {

    function filterTodos(filterName) {
        if (filterName === 'all') {
            setFilterOptions({all: true, pending: false, completed: false});
            setFilteredTodos(todos);
        } else if (filterName === 'pending') {
            setFilterOptions({all: false, pending: true, completed: false});
            setFilteredTodos(todos.filter(todo => !todo.completed));
        } else if (filterName === 'completed') {
            setFilterOptions({all: false, pending: false, completed: true});
            setFilteredTodos(todos.filter(todo => todo.completed));
        }

    }

    return (
        <div className="todo-filter-container">
            <button
                id="todo-filter__option--all"
                className={`todo-filter__option ${darkMode
                    ? `todo-filter__option--dark-mode ${filterOptions.all ? 'dark-mode--active' : ''}`
                    : `todo-filter__option--light-mode ${filterOptions.all ? 'light-mode--active' : ''}
                    `}`}
                onClick={() => filterTodos('all')}
            >Todas
            </button>

            <button
                id="todo-filter__option--pending"
                className={`todo-filter__option ${darkMode
                    ? `todo-filter__option--dark-mode ${filterOptions.pending ? 'dark-mode--active' : ''}`
                    : `todo-filter__option--light-mode ${filterOptions.pending ? 'light-mode--active' : ''}
                    `}`}
                onClick={() => filterTodos('pending')}
            >Pendientes
            </button>

            <button
                id="todo-filter__option--completed"
                className={`todo-filter__option ${darkMode
                    ? `todo-filter__option--dark-mode ${filterOptions.completed ? 'dark-mode--active' : ''}`
                    : `todo-filter__option--light-mode ${filterOptions.completed ? 'light-mode--active' : ''}
                    `}`}
                onClick={() => filterTodos('completed')}
            >Completadas
            </button>

        </div>
    );
}

export default TodoFilter;