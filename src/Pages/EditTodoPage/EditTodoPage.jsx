import React, {useContext} from 'react';
import Layout from "../../Componets/Layout/Layout";
import {GlobalContext} from "../../Context/AppGlobalContext/AppGlobalContext";
import {useTodos} from "../../Hooks/UseTodos/useTodos";
import {CreateTodoForm} from "../../Componets/CreateTodoForm/CreateTodoForm";
import {useLocation, useParams} from "react-router-dom";

function EditTodoPage(props) {

    const location = useLocation()

    const {
        darkMode,
        navigate
    } = useContext(GlobalContext);

    const {
        onEditTodo,
        getTodoById,
        loading
    } = useTodos()

    const {id} = useParams()

    let todoText;

    if (location.state?.todo) {
    todoText = location.state.todo.text
    }else if (loading) {
        return <p>Loading...</p>
    } else {
        const toEditTodo = getTodoById(parseInt(id))
        todoText = toEditTodo.text
    }

    return (
        <Layout loading={loading} darkMode={darkMode}>
            <CreateTodoForm
                darkMode={darkMode}
                submitEvent={(newText) => onEditTodo({id: parseInt(id), newText})}
                defaultTodoText={todoText}
                navigate={navigate}
                formLabel={'Edita el'}
                action={'edit'}
            />
        </Layout>
    );
}

export {EditTodoPage};
