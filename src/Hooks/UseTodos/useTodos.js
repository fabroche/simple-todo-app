import React, {useEffect, useRef, useState} from "react";

function useTodos({setLoading, setError}) {
    // Estados
    const [todos, setTodos] = useState([]);
    const [sincronizedItem, setSincronizedItem] = useState(true);
    const [newTodoValue, setNewTodoValue] = useState("");

    // Estados derivados
    const totalTodos = todos.length
    const completedTodos = todos.filter(todo => todo.completed).length

    // Generadores
    const todoIdGenerator = useRef(idGenerator());

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
    function* idGenerator() {
        let id = parseInt(localStorage.getItem('nextId'), 10) || 1

        while (true) {
            localStorage.setItem('nextId', JSON.stringify(id + 1));
            yield id++;
        }
    }

    const handleToggleTodoCompleted = (id, completed) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            todo => todo.id === id
        )
        newTodos[todoIndex].completed = completed
        setTodos(newTodos)
    }

    const handleOnDeleteTodo = (id) => {

        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            todo => todo.id === id
        )
        newTodos.splice(todoIndex, 1)
        setTodos(newTodos)
    }

    const handleOnCreateTodo = (text) => {
        const newTodos = [
            {
                id: todoIdGenerator.current.next().value,
                text,
                completed: false
            },
            ...todos,
        ];
        setTodos(newTodos);
        setNewTodoValue('');
        // createTodoButton.click()
        // todoFilterActionAll.click()
    }


    function onEditTodo({id, newText}) {

        const newTodos = [...todos]
        const index = todos.findIndex(todo => todo.id === id);

        if (index !== -1) {
            newTodos[index] = {...todos[index], text:newText}
            setTodos(newTodos)
        }
        console.log('newTodos[index]=',newTodos[index])
        console.log(todos)
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
        onEditTodo
    }
}

export {useTodos}