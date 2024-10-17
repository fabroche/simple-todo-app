import './CreateTodoButton.css';

function CreateTodoButton({
                              showAnimaion,
                              navigate
                          }) {


    const handleOnCLick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("createTodoButton--active");
        navigate('/new')
        // showAnimaion(".createTodoForm__input-container", "createTodoForm__input-container--active");
        // showAnimaion(".createTodoForm-input", "createTodoForm-input--active");
        // showAnimaion(".createTodoForm-container", "createTodoForm-container--active");
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