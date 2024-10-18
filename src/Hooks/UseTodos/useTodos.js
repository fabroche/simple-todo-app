import React, {useEffect, useRef, useState} from "react";
import {useLocalStorage} from "../UseLocalStorage/useLocalStorage";

function useTodos() {
    // Estados
    // const [todos, setTodos] = useState([]);
    // const [sincronizedItem, setSincronizedItem] = useState(true);
    const [newTodoValue, setNewTodoValue] = useState("");

    const {
        item: todos,
        saveItem: setTodos,
        sincronizeItem: sincronizeTodos,
        sincronizedItem,
    } = useLocalStorage('todos', []);

    // Estados derivados
    const totalTodos = todos.length
    const completedTodos = todos.filter(todo => todo.completed).length


    // Generadores
    const todoIdGenerator = useRef(idGenerator());

    // DOM Elements
    const createTodoButton = document.querySelector('.createTodoButton');
    const todoFilterActionAll = document.querySelector('#todo-filter__option--all');

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
        sincronizeTodos()
    }

    return {
        todos,
        sincronizedItem,
        // searchValue,
        // setSearchValue,
        // filteredTodos: searchValue === "" ? filteredTodos : searchedTodos,
        // setFilteredTodos,
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