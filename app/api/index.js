import axios from 'axios';

export default {
    listPokemons() {
        return axios.get(`http://pokeapi.co/api/v1/pokemon/?limit=12`);
    },
    listMorePokemons(offset) {
        return axios.get(`http://pokeapi.co/api/v1/pokemon/?limit=12&offset=${offset}`);
    },
    listCharacteristics(id) {
        return axios.get(`http://pokeapi.co/api/v1/pokemon/${id}/`);
    }
}
