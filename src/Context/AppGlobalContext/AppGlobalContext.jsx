import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDarkMode} from "../../Hooks/UseDarkMode/useDarkMode";

const GlobalContext = createContext();

function AppGlobalContextProvider({children}) {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {darkMode, setDarkMode} = useDarkMode()

    return (
        <GlobalContext.Provider value={{
            navigate,
            loading,
            setLoading,
            error,
            setError,
            darkMode,
            setDarkMode
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export {GlobalContext, AppGlobalContextProvider};