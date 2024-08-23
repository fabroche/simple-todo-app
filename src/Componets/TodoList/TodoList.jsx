import './TodoList.css';

function TodoList(props) {
    const renderFunc = props.children || props.render

    return (
        <section className="todoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.error && props.totalTodos === 0) && props.onEmptyTodos()}
            {props.filteredTodos.map(renderFunc)}
            {(!!props.totalTodos && !props.filteredTodos.length) && props.onEmptySearchResult(props.searchValue)}
        </section>
    )
}

export {TodoList};