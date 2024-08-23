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

            <TodoList
                error={error}
                loading={loading}
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
                        loading={loading}
                        darkMode={darkMode}
                        handleOnDeleteTodo={handleOnDeleteTodo}
                        handleToggleTodoCompleted={handleToggleTodoCompleted}
                    />
                )}
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