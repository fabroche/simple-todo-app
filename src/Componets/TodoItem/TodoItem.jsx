import './TodoItem.css';
import {VscArchive,VscEdit } from "react-icons/vsc";
import {useEffect} from "react";

function TodoItem({
                      id,
                      text,
                      completed,
                      darkMode,
                      loading,
                      sincronizedItems,
                      handleToggleTodoCompleted,
                      handleOnDeleteTodo,
                      onEditTodo,
                  }) {


    return (
        <li className={`todoItem ${darkMode ? 'todoItem--dark-mode' : 'todoItem--light-mode'} ${loading ? 'loading' : ''} ${!sincronizedItems ? 'disabled' : ''}`}>
            <input
                type={"checkbox"}
                checked={completed}
                value={completed}
                onChange={() => handleToggleTodoCompleted(id, !completed)}
                disabled={!sincronizedItems}
            >
            </input>
            <p className={`todoItem__text ${completed ? 'todoItem__text--completed' : ''}`}>{text}</p>
           <div className="todoItem__actions-container">
               <VscEdit className="todoItem-editIcon" onClick={onEditTodo}
               />
               <VscArchive className="todoItem-deleteIcon" onClick={() => sincronizedItems
                   ? handleOnDeleteTodo(id)
                   : true
               }/>
           </div>

        </li>
    )
}

export {TodoItem};