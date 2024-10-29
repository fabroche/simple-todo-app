import './HomePage.css';

import {TodoCounter} from "../../Componets/TodoCounter/TodoCounter";
import {DarkModeBtn} from "../../Componets/DarkModeBtn/DarkModeBtn";
import {TodoSearch} from "../../Componets/TodoSearch/TodoSearch";
import {TodoList} from "../../Componets/TodoList/TodoList";
import {TodoItem} from "../../Componets/TodoItem/TodoItem";
import {CreateTodoForm} from "../../Componets/CreateTodoForm/CreateTodoForm";
import {useTodos} from "../../Hooks/UseTodos/useTodos";
import Modal from "../../Componets/Modal/Modal";
import {CreateTodoButton} from "../../Componets/CreateTodoButton/CreateTodoButton";
import TodoFilter from "../../Componets/TodoFilter/TodoFilter";
import {TodosError} from "../../Componets/TodosError/TodosError";
import {TodosLoading} from "../../Componets/TodosLoading/TodosLoading";
import {EmptyTodos} from "../../Componets/EmptyTodos/EmptyTodos";
import TodoHeader from "../../Componets/TodoHeader/TodoHeader";
import Layout from "../../Componets/Layout/Layout";
import {StorageChangeAlertWithStorageListener} from "../../Componets/StorageChangeAlert/StorageChangeAlert";
import {useContext, useState} from "react";
import {useDarkMode} from "../../Hooks/UseDarkMode/useDarkMode";
import {useSearch} from "../../Hooks/UseSearch/useSearch";
import {useNavigate} from "react-router-dom";
import {GlobalContext} from "../../Context/AppGlobalContext/AppGlobalContext";

function HomePage() {
    const {
        navigate,
        darkMode,
        setDarkMode
    } = useContext(GlobalContext);


    // const navigate = useNavigate()
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    // const {darkMode, setDarkMode} = useDarkMode()
    const {
        todos,
        loading,
        error,
        totalTodos,
        sincronize,
        sincronizedItem,
        completedTodos,
        handleOnDeleteTodo,
        handleToggleTodoCompleted,
    } = useTodos();

    const {
        searchValue,
        setSearchValue,
        filteredTodos,
        setFilteredTodos,
        filterReducerState,
        filterDispatch
    } = useSearch({todos, loading})

    // DOM Elements
    const rootContainer = document.querySelector('#root');

    const showAnimaion = (elementSelector, activeClassName) => {
        if (!isOpenModal) {
            setTimeout(() => {
                const elementToAnimate = document.querySelector(elementSelector);
                elementToAnimate.classList.toggle(activeClassName);
            }, 100);
        }
    }

    return (
        <Layout loading={loading} darkMode={darkMode}>
            <TodoHeader>
                <CreateTodoButton
                    navigate={navigate}
                    showAnimaion={showAnimaion}
                />
                <TodoCounter
                    completedTodos={completedTodos}
                    totalTodos={totalTodos}
                    error={error}
                />
                <DarkModeBtn
                    darkMode={darkMode}
                    rootContainer={rootContainer}
                    setDarkMode={setDarkMode}
                />
            </TodoHeader>
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                darkMode={darkMode}
            />
            <TodoFilter
                darkMode={darkMode}
                todos={todos}
                setFilteredTodos={setFilteredTodos}
                filterReducerState={filterReducerState}
                filterDispatch={filterDispatch}
            />

            <TodoList
                error={error}
                totalTodos={totalTodos}
                filteredTodos={filteredTodos}
                sincronizedItems={sincronizedItem}
                searchValue={searchValue}
                onError={() => <TodosError/>}
                onLoading={() => <TodosLoading darkMode={darkMode}/>}
                onEmptyTodos={() => <EmptyTodos/>}
                onEmptySearchResult={(searchValue) => <p>There is not coincidences for {searchValue}</p>}
            >
                {todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        darkMode={darkMode}
                        sincronizedItems={sincronizedItem}
                        handleOnDeleteTodo={handleOnDeleteTodo}
                        handleToggleTodoCompleted={handleToggleTodoCompleted}
                        onEdit={() => {
                            navigate(
                                `/edit/${todo.id}/`,
                                {
                                    state: {todo: todo}
                                }
                            )
                        }}
                    />
                )}
            </TodoList>

            <StorageChangeAlertWithStorageListener
                sincronize={sincronize}
                handleOnDeleteTodo={handleOnDeleteTodo}
            />

            {/*{isOpenModal &&*/}
            {/*    (*/}
            {/*        <Modal>*/}
            {/*            <CreateTodoForm*/}
            {/*                darkMode={darkMode}*/}
            {/*                handleOnCreateTodo={handleOnCreateTodo}*/}
            {/*                newTodoValue={newTodoValue}*/}
            {/*                setNewTodoValue={setNewTodoValue}*/}
            {/*            />*/}
            {/*        </Modal>*/}
            {/*    )}*/}
        </Layout>
    )
}

export default HomePage;