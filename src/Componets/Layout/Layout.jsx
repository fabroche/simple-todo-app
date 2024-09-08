import React from 'react';
import './Layout.css'

function Layout({children, loading, darkMode}) {

    return (
        <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            {
                    React.Children
                        .toArray(children)
                        .map(
                            child => React.cloneElement(child, {loading, darkMode})
                        )
            }
        </div>
    );
}

export default Layout;