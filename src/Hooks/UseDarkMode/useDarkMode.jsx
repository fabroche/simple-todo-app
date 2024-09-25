import React, {useEffect, useState} from 'react';

function useDarkMode(props) {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    // Save in localStorage darkMode state

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode]);
    return {darkMode, setDarkMode};
}

export {useDarkMode};