import React, {useContext} from 'react';
import './AppUi.css';
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {DarkModeBtn} from "../DarkModeBtn/DarkModeBtn";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoForm} from "../CreateTodoForm/CreateTodoForm";
import {TodoContext} from "../../Componets/TodoContext/todoContext";
import Modal from "../Modal/Modal";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import TodoFilter from "../TodoFilter/TodoFilter";

function AppUi() {

    const {
        darkMode,
        loading,
        error,
        filteredTodos,
        isOpenModal,
        setIsOpenModal
    } = useContext(TodoContext);

    return (
        <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="header flex-container">
                <CreateTodoButton/>
                <TodoCounter/>
                <DarkModeBtn/>
            </div>
            <TodoSearch/>
            <TodoFilter/>
            <TodoList>
                {loading && [
                    <TodoItem key={1} text={"Loading..."}/>,
                    <TodoItem key={2} text={"Loading..."}/>,
                    <TodoItem key={3} text={"Loading..."}/>,
                    <TodoItem key={4} text={"Loading..."}/>
                ]}
                {error && <p>Critical Error</p>}

                {filteredTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>



            {isOpenModal &&
                (<Modal>
                        <CreateTodoForm/>
                    </Modal>
                )}
        </div>
    )
}

export {AppUi};