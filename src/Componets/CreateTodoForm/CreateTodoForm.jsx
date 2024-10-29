import './CreateTodoForm.css';
import {VscEdit, VscNewFile, VscChromeClose} from "react-icons/vsc";
import {useState} from "react";

function CreateTodoForm({
                            defaultTodoText,
                            submitEvent,
                            darkMode,
                            navigate,
                            formLabel,
                            action
                        }) {

    const [newTodoValue, setNewTodoValue] = useState(defaultTodoText || '');

    const submitButtonIcon = {
        create: <VscNewFile className={`createTodoForm-icon`}/>,
        edit: <VscEdit className={`createTodoForm-icon`}/>,
    }

    function onSubmit(e) {
        e.preventDefault()
        submitEvent(newTodoValue)
        setNewTodoValue('')
        navigate('/')
    }

    return (
        <div className={"createTodoForm-container"}>

            <form
                className={`createTodoForm__input-container ${darkMode ? 'createTodoForm__input-container--dark-mode' : 'createTodoForm__input-container--light-mode'} createTodoForm__input-container--active`}
                onSubmit={(e) => onSubmit(e)}>
                <VscChromeClose
                    className="createTodoForm__input-container__closeBtn"
                    onClick={() => navigate('/')}
                />
                <label htmlFor="createTodoForm__input"><h2>{formLabel} <span
                    className="todoCounter-text--max">TODO</span></h2></label>
                <input
                    className={'createTodoForm-input createTodoForm-input--active'}
                    type="text"
                    placeholder={"Create a new task"}
                    value={newTodoValue}
                    onChange={(e) => setNewTodoValue(e.target.value)}
                    required
                />
                <button
                    type="submit"
                >
                    {submitButtonIcon[action]}
                </button>
            </form>
        </div>
    )
}

export {CreateTodoForm};