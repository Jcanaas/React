import { useState, useEffect } from 'react';

export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]); // Estado para almacenar los gifs

    const getGifs = async () => {
        try {
            const url = `https://api.giphy.com/v1/gifs/search?api_key=aFxftdkizgXsN7xZ6n9WRmkqWqk23XcV&q=${category}&limit=10`;
            const resp = await fetch(url);
            const { data } = await resp.json();

            const gifsData = data.map((gif) => ({
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url,
            }));

            setGifs(gifsData); // Actualiza el estado con los gifs obtenidos
        } catch (error) {
            console.error('Error al obtener los gifs:', error);
        }
    };

    useEffect(() => {
        getGifs(); // Llama a la función al montar el componente
    }, [category]); // Se ejecuta cada vez que cambia la categoría

    return (
        <>
            <h3>{category}</h3>
            <div className="gif-grid">
                {gifs.map(({ id, title, url }) => (
                    <div key={id} className="gif-item">
                        <img src={url} alt={title} />
                        <p>{title}</p>
                    </div>
                ))}
            </div>
        </>
    );
};