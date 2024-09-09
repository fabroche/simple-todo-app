import './TodoItem.css';
import {VscArchive} from "react-icons/vsc";
import {useEffect} from "react";

function TodoItem({
                      text,
                      completed,
                      darkMode,
                      loading,
                      sincronizedItems,
                      handleToggleTodoCompleted,
                      handleOnDeleteTodo
                  }) {


    return (
        <li className={`todoItem ${darkMode ? 'todoItem--dark-mode' : 'todoItem--light-mode'} ${loading ? 'loading' : ''} ${!sincronizedItems ? 'disabled' : ''}`}>
            <input
                type={"checkbox"}
                checked={completed}
                value={completed}
                onChange={() => handleToggleTodoCompleted(text, !completed)}
                disabled={!sincronizedItems}
            >
            </input>
            <p className={`todoItem__text ${completed ? 'todoItem__text--completed' : ''}`}>{text}</p>
            <VscArchive className="todoItem-deleteIcon" onClick={() => sincronizedItems
                ? handleOnDeleteTodo(text)
                : true
            }/>
        </li>
    )
}

export {TodoItem};