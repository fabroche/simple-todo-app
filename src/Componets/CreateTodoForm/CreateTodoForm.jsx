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

            <div className={'createTodoForm__input-container'}>

                <input
                    className={'createTodoForm-input'}
                    type="text"
                    placeholder={"Create a new task"}
                    value={newTodoValue}
                    onChange={(e) => setNewTodoValue(e.target.value)}
                />
                <VscNewFile type="submit" className="createTodoForm-icon" onClick={(e) => handleOnCreateTodo(e, newTodoValue)}/>
            </div>
        </div>
    )
}

export {CreateTodoForm};