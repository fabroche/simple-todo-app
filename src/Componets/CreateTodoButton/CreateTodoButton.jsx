import './CreateTodoButton.css';
import {useContext} from "react";
import {TodoContext} from "../TodoContext/todoContext";

function CreateTodoButton({
                              isOpenModal,
                              setIsOpenModal,
                              showAnimaion
                          }) {


    const handleOnCLick = (e) => {
        e.preventDefault();
        setIsOpenModal(!isOpenModal);
        e.target.classList.toggle("createTodoButton--active");
        showAnimaion(".createTodoForm__input-container", "createTodoForm__input-container--active");
        showAnimaion(".createTodoForm-input", "createTodoForm-input--active");
        showAnimaion(".createTodoForm-container", "createTodoForm-container--active");
    }

    return (
        <button
            className="createTodoButton"
            onClick={(e) => handleOnCLick(e)}
        >
            +
        </button>
    );
}

export {CreateTodoButton};