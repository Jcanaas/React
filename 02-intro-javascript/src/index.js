import {heroes} from './data/heroes.js';
const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);

console.log( getHeroeById(5));

const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

console.log( getHeroeByOwner('DC'));