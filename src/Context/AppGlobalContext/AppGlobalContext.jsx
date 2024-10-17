import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDarkMode} from "../../Hooks/UseDarkMode/useDarkMode";
import {useLocalStorage} from "../../Hooks/UseLocalStorage/useLocalStorage";

const GlobalContext = createContext();

function AppGlobalContextProvider({children}) {
    const navigate = useNavigate()
    const {darkMode, setDarkMode} = useDarkMode()
    const {
        loading,
        error
    } = useLocalStorage('todos', [])

    return (
        <GlobalContext.Provider value={{
            navigate,
            darkMode,
            setDarkMode,
            loading,
            error
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export {GlobalContext, AppGlobalContextProvider};