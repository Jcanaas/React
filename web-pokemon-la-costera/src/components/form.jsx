import React, { useState, useEffect } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        comentarios: '',
        rating: '3', // Valor por defecto
    });
    const [mensaje, setMensaje] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Obtener el nombre del usuario desde localStorage
        const usuarioLocal = localStorage.getItem('usuario');
        if (usuarioLocal) {
            setFormData((prevData) => ({ ...prevData, nombre: usuarioLocal }));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { nombre, comentarios, rating } = formData;

        // Verifica si los campos obligatorios están completos
        if (!nombre || !rating) {
            setMensaje('Por favor, completa todos los campos obligatorios.');
            return;
        }

        setIsSubmitting(true);

        const scriptURL =
            'https://script.google.com/macros/s/AKfycbwvIGoqILZbwGRAg8gDopu02BXnT2xFj1ujWU4imDIGF3n5G7SxySgMk7aDkS5iJmmLMw/exec';

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify({ nombre, comentarios, rating }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const result = await response.json();
            if (result.mensaje) {
                setMensaje('¡Formulario enviado con éxito!');
                setTimeout(() => {
                    window.location.href = 'thank_you.html';
                }, 2000);
            } else {
                setMensaje('Hubo un error.');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setMensaje('Hubo un error al enviar el formulario.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            nombre: '',
            comentarios: '',
            rating: '3',
        });
        setMensaje('');
    };

    return (
        <main>
            <section className="waves">
                <div className="air air1"></div>
                <div className="air air2"></div>
                <div className="air air3"></div>
                <div className="air air4"></div>
            </section>

            <div className="login-container">
                <h1 className="text-4xl text-center text-blue-700">Formulario de Satisfacción</h1>
                <div className="form-container bg-white rounded-lg shadow-xl p-10 mt-5">
                    <form id="formulario" className="space-y-5" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nomCognoms">Nombre y Apellidos:</label>
                            <input
                                id="nomCognoms"
                                type="text"
                                name="nombre"
                                placeholder="Nombre y Apellidos"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="observacions">Comentarios (máximo 200 caracteres):</label>
                            <textarea
                                id="observacions"
                                name="comentarios"
                                rows="4"
                                maxLength="200"
                                placeholder="Escribe tus comentarios aquí..."
                                value={formData.comentarios}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="form-group rating">
                            <label htmlFor="rating">Calificación:</label>
                            <div className="rating-buttons">
                                {[1, 2, 3, 4, 5].map((rate) => (
                                    <React.Fragment key={rate}>
                                        <input
                                            type="radio"
                                            id={`rate${rate}`}
                                            name="rating"
                                            value={rate}
                                            checked={formData.rating === `${rate}`}
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor={`rate${rate}`}>{rate}</label>
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div id="botones" className="form-buttons">
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                            </button>
                            <button type="button" onClick={handleReset}>
                                Reset
                            </button>
                        </div>
                    </form>
                    {mensaje && <div id="mensaje" className="mt-5 text-center">{mensaje}</div>}
                    <div className="mt-5 text-center">
                        O si lo prefieres puedes dejar tu comentario en mi{' '}
                        <a
                            href="https://github.com/Jcanaas/JoJo-Flix/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue"
                        >
                            GitHub
                        </a>
                        .
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Form;