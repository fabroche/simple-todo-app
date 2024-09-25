import React, {useEffect, useState} from "react";

function useTodos({setLoading, setError}) {
    // Estados
    const [todos, setTodos] = useState([]);
    const [sincronizedItem, setSincronizedItem] = useState(true);
    const [newTodoValue, setNewTodoValue] = useState("");

    // Estados derivados
    const totalTodos = todos.length
    const completedTodos = todos.filter(todo => todo.completed).length


    // DOM Elements
    const createTodoButton = document.querySelector('.createTodoButton');
    const todoFilterActionAll = document.querySelector('#todo-filter__option--all');

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
        todoFilterActionAll.click()
    }

    function sincronize() {
        setSincronizedItem(false)
    }

    return {
        todos,
        sincronizedItem,
        sincronize,
        totalTodos,
        completedTodos,
        newTodoValue,
        setNewTodoValue,
        handleToggleTodoCompleted,
        handleOnDeleteTodo,
        handleOnCreateTodo,
    }
}

export {useTodos}