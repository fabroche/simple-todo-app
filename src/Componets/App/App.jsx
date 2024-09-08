import './App.css';

import {TodoCounter} from "../TodoCounter/TodoCounter";
import {DarkModeBtn} from "../DarkModeBtn/DarkModeBtn";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoForm} from "../CreateTodoForm/CreateTodoForm";
import {useTodos} from "../UseTodos/useTodos";
import Modal from "../Modal/Modal";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import TodoFilter from "../TodoFilter/TodoFilter";
import {TodosError} from "../TodosError/TodosError";
import {TodosLoading} from "../TodosLoading/TodosLoading";
import {EmptyTodos} from "../EmptyTodos/EmptyTodos";
import TodoHeader from "../TodoHeader/TodoHeader";
import Layout from "../Layout/Layout";
import {StorageChangeAlertWithStorageListener} from "../StorageChangeAlert/StorageChangeAlert";

function App() {

    const {
        // Dark Mode
        darkMode,
        setDarkMode,
        // Loading and Error States
        loading,
        error,
        // TODOS
        todos,
        totalTodos,
        sincronize,
        filteredTodos,
        setFilteredTodos,
        completedTodos,
        handleOnDeleteTodo,
        handleToggleTodoCompleted,
        handleOnCreateTodo,
        newTodoValue,
        setNewTodoValue,
        // Modal
        isOpenModal,
        setIsOpenModal,
        showAnimaion,
        // DOM Elements
        rootContainer,
        // Search
        searchValue,
        setSearchValue,
        // Filters
        filterOptions,
        setFilterOptions

    } = useTodos();

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
                filteredTodos={filteredTodos}
                setFilteredTodos={setFilteredTodos}
                todos={todos}
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
            />

            <TodoList
                error={error}
                totalTodos={totalTodos}
                filteredTodos={filteredTodos}
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
                        // loading={loading}
                        darkMode={darkMode}
                        handleOnDeleteTodo={handleOnDeleteTodo}
                        handleToggleTodoCompleted={handleToggleTodoCompleted}
                    />
                )}
            </TodoList>

            <StorageChangeAlertWithStorageListener sincronize={sincronize}/>


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