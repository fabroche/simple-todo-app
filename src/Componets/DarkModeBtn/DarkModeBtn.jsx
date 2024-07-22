import './DarkModeBtn.css';
import {VscColorMode} from "react-icons/vsc";
import {useContext} from "react";
import {TodoContext} from "../TodoContext/todoContext";

function DarkModeBtn() {

    const {darkMode, setDarkMode} = useContext(TodoContext);

    return (
        <VscColorMode
            id="darkMode"
            className="dark-mode-btn"
            onClick={() => setDarkMode(!darkMode)}
        />
    )
}

export {DarkModeBtn};