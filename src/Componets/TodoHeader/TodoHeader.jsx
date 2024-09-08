import React from 'react';
import './TodoHeader.css'

function TodoHeader({children}) {
    return (
        <div className="header flex-container">
            {children}
        </div>
    );
}

export default TodoHeader;