import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'; // Importación corregida
import './styles.css'; // Asegúrate de que los estilos estén aquí

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);