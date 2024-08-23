import React from 'react';
import {TodoItem} from "../TodoItem/TodoItem";

function TodosLoading({darkMode}) {
    return (
        <>
            <TodoItem key={1} text={"Loading..."} loading={true} darkMode={darkMode}/>
            <TodoItem key={2} text={"Loading..."} loading={true} darkMode={darkMode}/>
            <TodoItem key={3} text={"Loading..."} loading={true} darkMode={darkMode}/>
            <TodoItem key={4} text={"Loading..."} loading={true} darkMode={darkMode}/>
        </>
    );
}

export {TodosLoading};