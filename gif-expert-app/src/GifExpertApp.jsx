import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'; // Asegúrate de importar GifGrid

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        // Validar si la categoría ya existe
        if (categories.includes(newCategory)) return;

        // Agregar la nueva categoría
        setCategories([newCategory, ...categories]);
    };

    return (
        <div>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />

            {/* Listado de gif */}
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </div>
    );
};