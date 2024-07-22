import './App.css';
import {TodoProvider} from "./Componets/TodoContext/todoContext";
import {AppUi} from "./Componets/AppUi/AppUi";


function App() {

    return (
        <TodoProvider>
            <AppUi/>
        </TodoProvider>
    )
}

export default App;