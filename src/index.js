import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Componets/App/App';

const rootContainer = document.getElementById('root');
const darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;

if (darkMode) {
    rootContainer.classList.remove('light-mode');
    rootContainer.classList.add('dark-mode');
} else {
    rootContainer.classList.remove('dark-mode');
    rootContainer.classList.add('light-mode');

}
const root = ReactDOM.createRoot(rootContainer);
root.render(<App/>);
