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
        <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="header flex-container">
                <CreateTodoButton
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    showAnimaion={showAnimaion}
                />
                <TodoCounter
                    completedTodos={completedTodos}
                    totalTodos={totalTodos}
                    loading={loading}
                    error={error}
                />
                <DarkModeBtn
                    darkMode={darkMode}
                    rootContainer={rootContainer}
                    setDarkMode={setDarkMode}
                />
            </div>
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
            <TodoList>
                {loading && [
                    <TodoItem key={1} text={"Loading..."} loading={loading} darkMode={darkMode}/>,
                    <TodoItem key={2} text={"Loading..."} loading={loading} darkMode={darkMode}/>,
                    <TodoItem key={3} text={"Loading..."} loading={loading} darkMode={darkMode}/>,
                    <TodoItem key={4} text={"Loading..."} loading={loading} darkMode={darkMode}/>,
                ]}
                {error && <p>Critical Error</p>}

                {filteredTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        loading={loading}
                        darkMode={darkMode}
                        handleOnDeleteTodo={handleOnDeleteTodo}
                        handleToggleTodoCompleted={handleToggleTodoCompleted}
                    />
                ))}
            </TodoList>


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
        </div>
    )
}

export default App;