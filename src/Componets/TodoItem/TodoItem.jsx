import './TodoItem.css';
import {VscArchive} from "react-icons/vsc";

function TodoItem({
                      text,
                      completed,
                      darkMode,
                      loading,
                      handleToggleTodoCompleted,
                      handleOnDeleteTodo
                  }) {


    return (
        <li className={`todoItem ${darkMode ? 'todoItem--dark-mode' : 'todoItem--light-mode'} ${loading ? 'loading' : ''}`}>
            <input
                type={"checkbox"}
                checked={completed}
                value={completed}
                onChange={() => handleToggleTodoCompleted(text, !completed)}
            >
            </input>
            <p className={`todoItem__text ${completed ? 'todoItem__text--completed' : ''}`}>{text}</p>
            <VscArchive className="todoItem-deleteIcon" onClick={() => handleOnDeleteTodo(text)}/>
        </li>
    )
}

export {TodoItem};