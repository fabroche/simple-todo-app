import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import {NewTodoPage} from "./NewTodoPage/NewTodoPage";
import {EditTodoPage} from "./EditTodoPage/EditTodoPage";
import Layout from "../Componets/Layout/Layout";

function App(props) {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/new" element={<NewTodoPage/>}/>
                <Route path="/edit/:id/" element={<EditTodoPage/>}/>
                <Route path="*" element={<Layout><h1>Page Not Found</h1></Layout>}/>
            </Routes>
        </HashRouter>
    );
}

export {App};