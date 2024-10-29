import './TodoSearch.css';
import {VscGoToSearch} from "react-icons/vsc";
import {useSearchParams} from "react-router-dom";

function TodoSearch({
                        searchValue,
                        setSearchValue,
                        darkMode,
                        loading
                    }) {

    const [searchParams, setSearchParams] = useSearchParams()

    const paramsValue = searchParams.get('search')

    function onSearchValueChange(e) {
        setSearchValue(e.target.value)

        setSearchParams({
            search: e.target.value
        })
    }

    return (
        <div className="search-header">
            <div className="search-container">
                <input
                    className={`todoSearch ${darkMode ? 'todoSearch--dark-mode' : 'todoSearch--light-mode'}`}
                    placeholder="Search your task"
                    type={"text"}
                    value={paramsValue ?? ''}
                    onChange={onSearchValueChange}
                    disabled={loading}
                />
                <VscGoToSearch
                    type={"button"}
                    className={`searchBtn ${darkMode ? 'searchBtn--dark-mode' : 'searchBtn--light-mode'}`}
                />
            </div>

        </div>
    )
}

export {TodoSearch};
