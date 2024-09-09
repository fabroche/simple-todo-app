import React from 'react';
import {WithStorageListener} from "./withStorageListener";
import './StorageChangeAlert.css'

function StorageChangeAlert({show, toggleShow}) {
    if (show) return <button
        className="update-storageChange-btn"
        onClick={toggleShow}
        >Ups!! your to-do list is outdated, click here and dont miss anything</button>;
}

const StorageChangeAlertWithStorageListener = WithStorageListener(StorageChangeAlert)

export {StorageChangeAlertWithStorageListener};