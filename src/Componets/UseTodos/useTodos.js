import React, {useEffect, useState} from "react";

function useTodos(props) {
    // Estados
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [sincronizedItem, setSincronizedItem] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [newTodoValue, setNewTodoValue] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [filterOptions, setFilterOptions] = useState({
        all: true,
        pending: false,
        completed: false
    })
    const [filteredTodos, setFilteredTodos] = useState([]);

    // Estados derivados
    const totalTodos = todos.length
    const completedTodos = todos.filter(todo => todo.completed).length


    // DOM Elements
    const createTodoButton = document.querySelector('.createTodoButton');
    const todoFilterAptionAll = document.querySelector('#todo-filter__option--all');
    const todoFilterAptionPending = document.querySelector('#todo-filter__option--pending');
    const todoFilterAptionCompleted = document.querySelector('#todo-filter__option--completed');
    const rootContainer = document.querySelector('#root');

    // LocalStorage
    async function getTodosLocalStorage() {
        //simulating an API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    // fetchTodos
    useEffect(() => {
        async function getTodos() {
            try {
                setLoading(true)
                const response = await getTodosLocalStorage()
                setTodos(response)
            } catch (error) {
                setLoading(false)
                setError(true)
            } finally {
                setLoading(false)
                setSincronizedItem(true)
            }
        }

        getTodos()
        // console.log(await getTodosLocalStorage())
    }, [sincronizedItem]);

    // Save in localStorage todos and update filteredTodos
    useEffect(() => {
        if (!loading) {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
        setFilteredTodos(getFilteredTodos())
    }, [todos])

    // Save in localStorage darkMode state
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode]);

    useEffect(() => {
        setFilteredTodos(getFilteredTodos())
    }, [searchValue]);


    // Funciones
    const handleToggleTodoCompleted = (text, completed) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            todo => todo.text === text
        )
        newTodos[todoIndex].completed = completed
        setTodos(newTodos)
    }

    const handleOnDeleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            todo => todo.text === text
        )
        newTodos.splice(todoIndex, 1)
        setTodos(newTodos)
    }

    const handleOnCreateTodo = (e, text) => {
        e.preventDefault();
        const newTodos = [{text, completed: false}, ...todos,];
        setTodos(newTodos);
        setNewTodoValue('');
        createTodoButton.click()
        todoFilterAptionAll.click()
    }

    const showAnimaion = (elementSelector, activeClassName) => {
        if (!isOpenModal) {
            setTimeout(() => {
                const elementToAnimate = document.querySelector(elementSelector);
                elementToAnimate.classList.toggle(activeClassName);
            }, 100);
        }
    }

    function getFilteredTodos() {
        return todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

            return todoText.includes(searchText)
        })
    }

    function sincronize() {
        setSincronizedItem(false)
    }

    return {
        darkMode,
        setDarkMode,
        todos,
        loading,
        sincronize,
        error,
        filteredTodos,
        setFilteredTodos,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        newTodoValue,
        setNewTodoValue,
        isOpenModal,
        setIsOpenModal,
        filterOptions,
        setFilterOptions,
        rootContainer,
        handleToggleTodoCompleted,
        handleOnDeleteTodo,
        handleOnCreateTodo,
        showAnimaion
    }
}

export {useTodos}