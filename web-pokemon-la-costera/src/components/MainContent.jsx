import React, { useState } from 'react';

const MainContent = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        title: '',
        description: '',
        image: '',
    });

    const showModal = (title, description, image) => {
        setModalContent({ title, description, image });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <main>
            {/* Si hay contenido dinámico, se renderiza aquí */}
            {children || (
                <>
                    {/* Hero Section */}
                    <section className="hero">
                        <h1>¡Una nueva región, una antigua amenaza y artículos veraniegos muy caros!</h1>
                        <p>Explora La Costera y enfréntate al despertar de Sierpentez.</p>
                        <button
                            className="download-button"
                            onClick={() => (window.location.href = 'descargas.html')}
                        >
                            Ver Tráiler Demo
                        </button>
                    </section>

                    {/* Galería de Mapas */}
                    <section className="galeria">
                        <p>Explora La Costera</p>
                        <div className="gallery grid">
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Bahía de Marezuela',
                                        'Ciudad portuaria con gimnasio Agua y pescados frescos.',
                                        'img/mapa_bahia.jpg'
                                    )
                                }
                            >
                                <img src="img/mapa_bahia.jpg" alt="Bahía de Marezuela" />
                                <h2>Bahía de Marezuela</h2>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Islas del Fuego',
                                        'Archipiélago volcánico con Pokémon únicos de Fuego.',
                                        'img/mapa_islas.jpg'
                                    )
                                }
                            >
                                <img src="img/mapa_islas.jpg" alt="Islas del Fuego" />
                                <p>Islas del Fuego</p>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Dunas del Levante',
                                        'Desierto costero con Pokémon tipo Roca y Viento.',
                                        'img/mapa_dunas.jpg'
                                    )
                                }
                            >
                                <img src="img/mapa_dunas.jpg" alt="Dunas del Levante" />
                                <p>Dunas del Levante</p>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Cueva del Levante',
                                        'Hogar de Sierpentez y epicentro del caos.',
                                        'img/mapa_cueva.jpg'
                                    )
                                }
                            >
                                <img src="img/mapa_cueva.jpg" alt="Cueva del Levante" />
                                <p>Cueva del Levante</p>
                            </div>
                        </div>
                    </section>

                    {/* Galería de Pokémon */}
                    <section className="galeria">
                        <h2>Pokémon Exclusivos</h2>
                        <div className="gallery grid">
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Sierpentez',
                                        'Legendario envuelto en algas (Dragón/Agua).',
                                        'img/sierpentez.jpg'
                                    )
                                }
                            >
                                <img src="img/sierpentez.jpg" alt="Sierpentez" />
                                <p>Sierpentez</p>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Navajín',
                                        'Navaja marina con "Oleaje Nocturno" (Acero/Siniestro).',
                                        'img/navajin.jpg'
                                    )
                                }
                            >
                                <img src="img/navajin.jpg" alt="Navajín" />
                                <p>Navajín</p>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Gambascal',
                                        'Gamba luchadora con "Marisquito" (Agua/Fuego).',
                                        'img/gambascal.jpg'
                                    )
                                }
                            >
                                <img src="img/gambascal.jpg" alt="Gambascal" />
                                <p>Gambascal</p>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Molintón',
                                        'Confunde a los Tauros con molinos (Roca/Viento).',
                                        'img/molinton.jpg'
                                    )
                                }
                            >
                                <img src="img/molinton.jpg" alt="Molintón" />
                                <p>Molintón</p>
                            </div>
                        </div>
                    </section>

                    {/* Galería de Personajes */}
                    <section className="galeria">
                        <h2>Personajes</h2>
                        <div className="gallery grid">
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'El/La Protagonista',
                                        'Vive con su abuela en un pueblo costero. Su inicial dependerá de tu elección.',
                                        'img/protagonista.png'
                                    )
                                }
                            >
                                <img src="img/protagonista.png" alt="Protagonista" />
                                <p>Protagonista</p>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Andrés "El Fisco"',
                                        'Villano con yate y abanicos de oro. Líder del Team Almendrao.',
                                        'img/Andres.png'
                                    )
                                }
                            >
                                <img src="img/Andres.png" alt="Andrés" />
                                <p>Andrés Guerra</p>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Profesor Emilio',
                                        'Investigador de Pokémon marinos.',
                                        'img/profesor_emilio.jpg'
                                    )
                                }
                            >
                                <img src="img/profesor_emilio.jpg" alt="Profesor Emilio" />
                                <p>Profesor Emilio</p>
                            </div>
                        </div>
                        <h2 style={{ fontSize: '20px' }}>Personajes invitados</h2>
                        <div className="gallery grid">
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Antonio Lobato',
                                        'Vive con su abuela en un pueblo costero. Su inicial dependerá de tu elección.',
                                        'img/antoniolobato.jpg'
                                    )
                                }
                            >
                                <img src="img/antoniolobato.jpg" alt="Antonio Lobato" />
                                <p>Antonio Lobato</p>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'J.Cañas',
                                        'Villano con yate y abanicos de oro. Líder del Team Almendrao.',
                                        'img/JCañas.png'
                                    )
                                }
                            >
                                <img src="img/JCañas.png" alt="J.Cañas" />
                                <p>J.Cañas</p>
                            </div>
                            <div
                                className="gallery-item"
                                onClick={() =>
                                    showModal(
                                        'Torrente',
                                        'Ex-detective que entrena Pokémon tipo Lucha y Normal. Su ataque especial es "Puño Justiciero".',
                                        'img/torrente.png'
                                    )
                                }
                            >
                                <img src="img/torrente.png" alt="Torrente" />
                                <p>Torrente</p>
                            </div>
                        </div>
                    </section>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <button className="modal-close" onClick={closeModal}>
                                    &times;
                                </button>
                                <h2>{modalContent.title}</h2>
                                <p>{modalContent.description}</p>
                                <img src={modalContent.image} alt={modalContent.title} />
                            </div>
                        </div>
                    )}
                </>
            )}
        </main>
    );
};

export default MainContent;