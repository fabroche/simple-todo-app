import './CreateTodoForm.css';
import {VscNewFile} from "react-icons/vsc";

import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import {useContext} from "react";
import {TodoContext} from "../TodoContext/todoContext";

function CreateTodoForm() {

    const {
        newTodoValue,
        setNewTodoValue,
        handleOnCreateTodo,
    } = useContext(TodoContext);


    return (
        <div className={"createTodoForm-container"}>

            <form className={'createTodoForm__input-container'} onSubmit={(e) => handleOnCreateTodo(e, newTodoValue)}>

                <input
                    className={'createTodoForm-input'}
                    type="text"
                    placeholder={"Create a new task"}
                    value={newTodoValue}
                    onChange={(e) => setNewTodoValue(e.target.value)}
                />
                <button type="submit">
                <VscNewFile className="createTodoForm-icon" />
                </button>
            </form>
        </div>
    )
}

export {CreateTodoForm};