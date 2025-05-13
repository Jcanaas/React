import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState(''); // Inicializa el input vacío

    const onInputChange = (event) => {
        setInputValue(event.target.value); // Actualiza el estado con el valor del input
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; // Evita agregar valores vacíos o muy cortos

        onNewCategory(inputValue.trim()); // Llama a la función pasada como prop
        setInputValue(''); // Limpia el input después de agregar
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};