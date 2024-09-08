import React, {useState} from 'react';

function WithStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'todos') {
                console.log('Hubo cambios en la lista de todos')
                setStorageChange(true)
            }
        })

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