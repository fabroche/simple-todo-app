import React from 'react';
import {WithStorageListener} from "./withStorageListener";

function StorageChangeAlert({show, toggleShow}) {
    if (show) return <>
        <p>Hubo cambios</p>
        <button
        onClick={toggleShow}
        >Recargar 🔄</button>
    </>
    ;
}

const StorageChangeAlertWithStorageListener = WithStorageListener(StorageChangeAlert)

export {StorageChangeAlertWithStorageListener};