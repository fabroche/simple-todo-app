import './TodoSearch.css';
import {VscGoToSearch} from "react-icons/vsc";
import {useContext} from "react";
import {TodoContext} from "../TodoContext/todoContext";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";

function TodoSearch() {

    const {searchValue, setSearchValue, darkMode} = useContext(TodoContext);

    return (
        <div className="search-header">
            <div className="search-container">
                <input
                    className={`todoSearch ${darkMode ? 'todoSearch--dark-mode' : 'todoSearch--light-mode'}`}
                    placeholder="Search your task"
                    type={"text"}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <VscGoToSearch
                    type={"button"}
                    className={`searchBtn ${darkMode ? 'searchBtn--dark-mode' : 'searchBtn--light-mode'}`}
                />
            </div>

        </div>
    )
}

export {TodoSearch};
