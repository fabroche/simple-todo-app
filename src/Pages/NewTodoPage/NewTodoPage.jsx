import React, {useContext} from 'react';
import Layout from "../../Componets/Layout/Layout";
import {CreateTodoForm} from "../../Componets/CreateTodoForm/CreateTodoForm";
import {GlobalContext} from "../../Context/AppGlobalContext/AppGlobalContext";
import {useTodos} from "../../Hooks/UseTodos/useTodos";

function NewTodoPage(props) {
    const {
        loading,
        darkMode,
        navigate
    } = useContext(GlobalContext);

    const {
        handleOnCreateTodo,
    } = useTodos()

    return (
        <Layout loading={loading} darkMode={darkMode}>
            <CreateTodoForm
                darkMode={darkMode}
                submitEvent={(text) => handleOnCreateTodo(text)}
                navigate={navigate}
                formLabel={'Crea un nuevo'}
                action={'create'}
            />
        </Layout>
    );
}

export {NewTodoPage};