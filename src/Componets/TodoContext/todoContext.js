import React, {useEffect, useState} from "react";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    // Estados
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [newTodoValue, setNewTodoValue] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);

    // Estados derivados
    const totalTodos = todos.length
    const completedTodos = todos.filter(todo => todo.completed).length
    const filteredTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        return todoText.includes(searchText)
    })

    // DOM Elements
    const createTodoButton = document.querySelector('.createTodoButton');

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
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }

        getTodos()
        // console.log(await getTodosLocalStorage())
    }, []);

    // Save in localStorage todos
    useEffect(() => {
        if (!loading) {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }, [todos])

    // Save in localStorage darkMode state
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode]);

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
        const newTodos = [ {text, completed: false} ,...todos,];
        setTodos(newTodos);
        setNewTodoValue('');
        createTodoButton.click()
    }

    const showAnimaion = (elementSelector, activeClassName) => {
        if (!isOpenModal) {
            setTimeout(() => {
                const elementToAnimate = document.querySelector(elementSelector);
                elementToAnimate.classList.toggle(activeClassName);
            }, 100);
        }
    }


    return (
        <TodoContext.Provider value={
            {
                darkMode,
                setDarkMode,
                todos,
                loading,
                error,
                filteredTodos,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                newTodoValue,
                setNewTodoValue,
                isOpenModal,
                setIsOpenModal,
                handleToggleTodoCompleted,
                handleOnDeleteTodo,
                handleOnCreateTodo,
                showAnimaion
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}