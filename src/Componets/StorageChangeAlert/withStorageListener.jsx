import React, {useEffect, useState} from 'react';

function WithStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'todos') {
                console.log('Hubo cambios en la lista de todos')
                setStorageChange(true)
            }
        })

        useEffect(() => {
            document.querySelectorAll('.todoItem')
                .forEach(todoItem => {
                    todoItem.classList.toggle('disabled')
                    if (todoItem.classList.contains('disabled')) {
                        todoItem.querySelector('input').disabled = true
                        todoItem.querySelector('svg').style = 'visibility: hidden';
                    } else {
                        todoItem.querySelector('input').disabled = true
                        todoItem.querySelector('svg').style = 'visibility: normal';

                    }
                })
        }, [storageChange]);

        const toggleShow = () => {
            props.sincronize()
            setStorageChange(false)
        }

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    };
}

export {WithStorageListener};