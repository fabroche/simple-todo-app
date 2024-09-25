import './App.css';

import {TodoCounter} from "../TodoCounter/TodoCounter";
import {DarkModeBtn} from "../DarkModeBtn/DarkModeBtn";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoForm} from "../CreateTodoForm/CreateTodoForm";
import {useTodos} from "../../Hooks/UseTodos/useTodos";
import Modal from "../Modal/Modal";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import TodoFilter from "../TodoFilter/TodoFilter";
import {TodosError} from "../TodosError/TodosError";
import {TodosLoading} from "../TodosLoading/TodosLoading";
import {EmptyTodos} from "../EmptyTodos/EmptyTodos";
import TodoHeader from "../TodoHeader/TodoHeader";
import Layout from "../Layout/Layout";
import {StorageChangeAlertWithStorageListener} from "../StorageChangeAlert/StorageChangeAlert";
import {useState} from "react";
import {useDarkMode} from "../../Hooks/UseDarkMode/useDarkMode";
import {useSearch} from "../../Hooks/UseSearch/useSearch";

function App() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);

    const {darkMode, setDarkMode} = useDarkMode()

    const {
        todos,
        totalTodos,
        sincronize,
        sincronizedItem,
        completedTodos,
        handleOnDeleteTodo,
        handleToggleTodoCompleted,
        handleOnCreateTodo,
        newTodoValue,
        setNewTodoValue,
    } = useTodos({setLoading, setError});

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
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
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
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        darkMode={darkMode}
                        sincronizedItems={sincronizedItem}
                        handleOnDeleteTodo={handleOnDeleteTodo}
                        handleToggleTodoCompleted={handleToggleTodoCompleted}
                    />
                )}
            </TodoList>

            <StorageChangeAlertWithStorageListener
                sincronize={sincronize}
                handleOnDeleteTodo={handleOnDeleteTodo}
            />

            {isOpenModal &&
                (
                    <Modal>
                        <CreateTodoForm
                            darkMode={darkMode}
                            handleOnCreateTodo={handleOnCreateTodo}
                            newTodoValue={newTodoValue}
                            setNewTodoValue={setNewTodoValue}
                        />
                    </Modal>
                )}
        </Layout>
    )
}

export default App;