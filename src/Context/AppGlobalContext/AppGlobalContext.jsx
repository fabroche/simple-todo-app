import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDarkMode} from "../../Hooks/UseDarkMode/useDarkMode";
import {useLocalStorage} from "../../Hooks/UseLocalStorage/useLocalStorage";
import {useTodos} from "../../Hooks/UseTodos/useTodos";

const GlobalContext = createContext();

function AppGlobalContextProvider({children}) {
    const navigate = useNavigate()
    const {darkMode, setDarkMode} = useDarkMode()

    return (
        <GlobalContext.Provider value={{
            navigate,
            darkMode,
            setDarkMode,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export {GlobalContext, AppGlobalContextProvider};