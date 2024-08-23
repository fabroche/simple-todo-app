import './CreateTodoForm.css';
import {VscNewFile} from "react-icons/vsc";

function CreateTodoForm({
                            newTodoValue,
                            setNewTodoValue,
                            handleOnCreateTodo,
                            darkMode
                        }) {


    return (
        <div className={"createTodoForm-container"}>

            <form
                className={`createTodoForm__input-container ${darkMode ? 'createTodoForm__input-container--dark-mode' : 'createTodoForm__input-container--light-mode'}`}
                onSubmit={(e) => handleOnCreateTodo(e, newTodoValue)}>
                <label htmlFor="createTodoForm__input"><h2>Crea un nuevo <span
                    className="todoCounter-text--max">TODO</span></h2></label>
                <input
                    className={'createTodoForm-input'}
                    type="text"
                    placeholder={"Create a new task"}
                    value={newTodoValue}
                    onChange={(e) => setNewTodoValue(e.target.value)}
                />
                <button
                    type="submit"
                >
                    <VscNewFile className={`createTodoForm-icon`}/>
                </button>
            </form>
        </div>
    )
}

export {CreateTodoForm};