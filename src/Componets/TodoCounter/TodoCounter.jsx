import './TodoCounter.css'

function TodoCounter({
                         completedTodos,
                         totalTodos,
                         loading,
                         error
                     }) {


    return (

        totalTodos > 0 && !loading && !error
            ? <h2 className="todoCounter">
                Tu Progreso: <span
                className={completedTodos === totalTodos ? "todoCounter-text todoCounter-text--max" : "todoCounter-text"}
            >{completedTodos}</span> / <span className="todoCounter-text--max">{totalTodos}</span>
                {/*{completedTodos === total && `Todos los To-do's completados`}*/}
            </h2>
            : loading
                ? <h2 className="todoCounter">Cargando tus <span className="todoCounter-text--max">TODOs</span></h2>
                : error
                    ? <h2 className="todoCounter">Error</h2>
                    : <h2 className="todoCounter">Crea un <span className="todoCounter-text--max">TODO</span></h2>
    )


}

export {TodoCounter};