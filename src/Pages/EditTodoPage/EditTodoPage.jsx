import React, {useContext} from 'react';
import Layout from "../../Componets/Layout/Layout";
import {GlobalContext} from "../../Context/AppGlobalContext/AppGlobalContext";
import {useTodos} from "../../Hooks/UseTodos/useTodos";
import {CreateTodoForm} from "../../Componets/CreateTodoForm/CreateTodoForm";
import {useParams} from "react-router-dom";

function EditTodoPage(props) {
    const {
        loading,
        setLoading,
        setError,
        darkMode,
        navigate
    } = useContext(GlobalContext);

    const {
        handleOnCreateTodo,
        newTodoValue,
        setNewTodoValue,
        onEditTodo
    } = useTodos({setLoading,setError})

    const {id} = useParams()

    return (
        <Layout loading={loading} darkMode={darkMode}>
            <CreateTodoForm
                darkMode={darkMode}
                submitEvent={(newText) => onEditTodo({id: parseInt(id), newText})}
                newTodoValue={newTodoValue}
                setNewTodoValue={setNewTodoValue}
                navigate={navigate}
                formLabel={'Edita el'}
                action={'edit'}
            />
        </Layout>
    );
}

export {EditTodoPage};