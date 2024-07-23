import './DarkModeBtn.css';
import {VscColorMode} from "react-icons/vsc";
import {useContext} from "react";
import {TodoContext} from "../TodoContext/todoContext";

function DarkModeBtn() {

    const {
        darkMode,
        setDarkMode,
        rootContainer
    } = useContext(TodoContext);

    function handleDarkMode() {
        setDarkMode(!darkMode)
        if (darkMode) {
            rootContainer.classList.remove('dark-mode');
            rootContainer.classList.add('light-mode');
        } else {
            rootContainer.classList.remove('light-mode');
            rootContainer.classList.add('dark-mode');
        }

    }

    return (
        <VscColorMode
            id="darkMode"
            className="dark-mode-btn"
            onClick={() => handleDarkMode()}
        />
    )
}

export {DarkModeBtn};