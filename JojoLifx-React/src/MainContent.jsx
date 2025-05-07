import React, { useState, useEffect } from 'react';

export const MainContent = () => {
  return (
    <main>
     <div className="pelicula-principal">
      <div className="contenedor">
        <h3 className="titulo">JoJo's Bizarre Adventureㅤ</h3>
        <p className="descripcion">
          En Inglaterra de los 1880, Dio Brando trama un plan para tomar la
          fortuna de su familia adoptiva, los Joestar, pero su hermano,
          Jonathan Joestar, lo trata de detener. Usando una misteriosa máscara
          de piedra, Dio se convierte en un vampiro mientras que Jonathan
          aprende hamon para combatirlo.
        </p>
        <button
          role="button"
          className="boton"
          onClick={() =>
            (window.location.href = 'Content/Jojo_s/JoJoTemporadas.html')
          }
        >
          <img src="img/play.png" alt="Play Icon" className="play-icon" /> Ver
        </button>
      </div>
      </div>

      <div className="pelicula-principalBECK">
        <div className="contenedor">
          <img src="img/Beck.png" alt="BECK: Mongolian Chop Squad Logo" />
          <div className="texto">
            <p className="descripcion">
              <br />
              Yukio Tanaka, conocido por todos como Koyuki, es un chico de
              catorce años insatisfecho con el rumbo que de momento parece llevar
              su monótona vida. Sin embargo, todo dará un vuelco cuando el joven
              salva a un perro de extraña apariencia de unos macarras y conoce a
              su dueño, Minami Ryûsuke.
            </p>
            <div>
              <button
                role="button"
                className="boton"
                onClick={() =>
                  (window.location.href = 'Content/BECK/BECK_List_Ep.html')
                }
              >
                <img src="img/play.png" alt="Play Icon" className="play-icon" />{' '}
                Ver
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pelicula-principalMonster">
        <div className="contenedor">
          <img
            className="monster-image"
            src="img/Monsterbanner.png"
            alt="Monster"
          />
          <p className="descripcion">
            El doctor Kenzo Tenma es un prometedor neurocirujano japonés que
            ejerce en el Eisler Memorial Hospital de Dusseldorf. Lo tiene todo
            en la vida; un trabajo que le apasiona y en el que demuestra una
            habilidad increíble, y una novia rica y guapa. Sin embargo, un día
            decide ignorar una orden de su superior y salva a un niño desconocido
            en lugar de la vida del alcalde de la ciudad.
          </p>
          <button
            role="button"
            className="boton"
            onClick={() =>
              (window.location.href = 'Content/Monster/MonsterlistEp.html')
            }
          >
            <img src="img/play.png" alt="Play Icon" className="play-icon" /> Ver
          </button>
        </div>
      </div>

      <div className="pelicula-principalBerserk">
        <div className="contenedor">
          <h3 className="titulo">BERSERK</h3>
          <p className="descripcion">
            Un joven y bravo guerrero llamado Guts lucha como un mercenario en
            primera línea. Por azares del destino, Guts se acaba uniendo al
            carismático y mortal joven llamado Griffith. Liderando al grupo de
            mercenarios conocidos como la Banda del Halcón, Griffith empuña su
            formidable fuerza como ningún otro lo ha hecho. Conducidos por
            cuestiones de estatus, los miembros de la Banda del Halcón pronto
            irán escalando en el camino de la gloria tras su alianza con el
            reino de Midland, hasta que un desafortunado suceso provocará un
            revés en la Banda que pondrá al mundo de rodillas.
          </p>
          <div>
            <button
              role="button"
              className="boton"
              onClick={() =>
                (window.location.href = 'Content/Berserk/Berserkarcos.html')
              }
            >
              <img src="img/play.png" alt="Play Icon" className="play-icon" />{' '}
              Ver
            </button>
          </div>
        </div>
      </div>

      <div className="pelicula-principalCyberpunk">
        <div className="contenedor">
          <h1
            className="titulo-glitch"
            data-text="CYBERPUNK"
            alt="Cyberpunk"
          >
            CYBERPUNK: EDGERUNERS
          </h1>

          <p className="descripcion">
            Sigue la historia de David Martinez, un joven de los barrios bajos de
            Night City que, tras una tragedia personal, se une a un grupo de
            mercenarios conocidos como edgerunners. Impulsado por la pérdida, el
            deseo de poder y la necesidad de sobrevivir, David se adentra en un
            mundo violento dominado por la tecnología, el crimen y la decadencia,
            mientras lucha por no perder su humanidad.
          </p>
          <div>
            <button
              style={{ marginTop: '30px' }}
              role="button"
              className="boton"
              onClick={() =>
                (window.location.href = 'Content/Berserk/Berserkarcos.html')
              }
            >
              <img src="img/play.png" alt="Play Icon" className="play-icon" />{' '}
              Ver
            </button>
          </div>
        </div>
      </div>

      <div className="pelicula-principalDMCB">
        <div className="contenedor">
          <h3 className="titulo">Devilman Crybaby</h3>
          <p className="descripcion">
            Los espíritus malignos deambulan por la Tierra y la humanidad se
            sumerge en el caos. Un niño demonio y Ryo, su amigo misterioso, en
            una guerra despiadada contra el mal.
          </p>
          <button
            role="button"
            className="boton"
            onClick={() =>
              (window.location.href = 'Content/DMCB/DMCB_ListEp.html')
            }
          >
            <img src="img/play.png" alt="Play Icon" className="play-icon" /> Ver
          </button>
        </div>
      </div>

      <div className="pelicula-principalDMC">
        <div className="contenedor">
          <img src="img/DevilMayCry.png" alt="Devil May Cry Logo" />
          <p className="descripcion">
            Dante esta a cargo de una tienda que hace de todo llamada Devil may
            cry. Con un mal carácter y una mala paga hace los trabajos para
            saldar todas sus deudas. Después de su primera misión a tenido que
            quedarse con una niña que según él es insoportable, pero esa niña
            tiene algo especial, es la heredera de una familia millonaria y de
            un poder que ni ella conoce.
          </p>
          <button
            role="button"
            className="boton"
            onClick={() =>
              (window.location.href = 'Content/DMC/DMC_List.html')
            }
          >
            <img src="img/play.png" alt="Play Icon" className="play-icon" /> Ver
          </button>
        </div>
      </div>

      <div className="pelicula-principalRDR">
        <div className="contenedor">
          <h3 className="titulo">RED DEAD REDEMTION 2</h3>
          <p className="descripcion">
            En Red Dead Redemption 2, sigues a Arthur Morgan, un forajido en los
            últimos días del Salvaje Oeste. Mientras su banda huye de la ley,
            Arthur debe elegir entre la lealtad y su propia redención.
          </p>
          <button
            role="button"
            className="boton"
            onClick={() =>
              (window.location.href = 'Content/RDR/rdr2.html')
            }
          >
            <img src="img/play.png" alt="Play Icon" className="play-icon" /> Ver
          </button>
        </div>
      </div>

      <div className="pelicula-principalHF">
        <div className="contenedor">
          <h3 className="titulo">Cancion de fuego y hielo </h3>
          <p className="descripcion">
            Cancion de Hielo y Fuego es una saga de fantasia epica de George R.R.
            Martin, donde varias casas nobles luchan por el Trono de Hierro
            mientras una amenaza sobrenatural resurge en el Norte. Llena de
            intriga, traicion y batallas, la historia explora poder, honor y
            supervivencia en un mundo cruel e impredecible.
          </p>
          <button
            role="button"
            className="boton"
            onClick={() =>
              (window.location.href = 'Content/HF/hf.html')
            }
            aria-label="Leer Cancion de fuego y hielo"
          >
            <img src="img/play.png" alt="Play Icon" className="play-icon" /> Leer
          </button>
        </div>
      </div>

      <div className="pelicula-principalANHQV">
        <div className="contenedor">
          <img src="img/AnhqvTitle.png" alt="Aqui no hay quien viva Title" />
          <p className="descripcion">
            Se narra la vida de una peculiar comunidad de vecinos de la calle
            Desengaño 21​ en un edificio decimonónico localizado en el centro de
            Madrid compuesta por un bloque de tres pisos, con un total de seis
            viviendas, una portería, un ático utilizado como trastero y un local
            contiguo.
          </p>
          <button
            role="button"
            className="boton"
            onClick={() => (window.location.href = '#')}
            aria-label="Ver Aqui no hay quien viva"
          >
            <img src="img/play.png" alt="Play Icon" className="play-icon" /> Ver
          </button>
        </div>
      </div>

      <div className="pelicula-principalTLOU">
        <div className="contenedor">
          <img
            style={{ maxWidth: '200px', marginTop: '10px' }}
            src="img/The_Last_of_Us_logo.png"
            alt="TLOU Title"
          />
          <p className="descripcion">
            The Last of Us sigue a Joel, un hombre endurecido por la pérdida, que
            debe escoltar a Ellie, una joven inmune a una infección que ha
            devastado al mundo. Juntos cruzan un Estados Unidos postapocalíptico
            lleno de peligros humanos e infectados, enfrentando desafíos que
            pondrán a prueba su vínculo, su moral y su voluntad de sobrevivir.
          </p>
          <button
            role="button"
            className="boton"
            onClick={() =>
              (window.location.href = 'Content/tlou/tloutemp.html')
            }
            aria-label="Ver The last of us"
          >
            <img src="img/play.png" alt="Play Icon" className="play-icon" /> Ver
          </button>
        </div>
      </div>

      <div className="pelicula-principalGames">
        <div className="contenedor">
          <h3 className="titulo">Videojuegos</h3>
          <p className="descripcion">
            <button
              role="button"
              className="boton"
              onClick={() => (window.location.href = 'Games/games.html')}
            >
              <img src="img/play.png" alt="Play Icon" className="play-icon" />{' '}
              Jugar
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};