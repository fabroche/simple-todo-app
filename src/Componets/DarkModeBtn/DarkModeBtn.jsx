import './DarkModeBtn.css';
import {VscColorMode} from "react-icons/vsc";

function DarkModeBtn({
                         darkMode,
                         setDarkMode,
                         rootContainer
                     }) {

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