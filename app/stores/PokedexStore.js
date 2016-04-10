import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _pokemons = [];
let _characteristics = [];
let _loadingError = null;
let _isLoading = true;
let _offset = 12;

function formatPokemon(pokemon) {
    return {
        id: pokemon.national_id,
        title: pokemon.name,
        types: pokemon.types
    };
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },
    getPokemons() {
        return _pokemons;
    },
    getCharacteristics() {
        return _characteristics;
    },
    getOffset() {        
        return _offset;
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_POKEMONS_REQUEST: {
            _isLoading = true;
            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_POKEMONS_SUCCESS: {
            _isLoading = false;
            _pokemons = action.pokemons.objects.map( formatPokemon );
            _loadingError = null;
            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_POKEMONS_FAIL: {
            _loadingError = action.error;
            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_CHARACTERISTICS_REQUEST: {
            _isLoading = true;
            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_CHARACTERISTICS_SUCCESS: {
            _isLoading = false;
            _characteristics = action.characteristics;
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_MORE_REQUEST: {
            _isLoading = true;
            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_MORE_SUCCESS: {
            _isLoading = false;
            _pokemons = _pokemons.concat(action.pokemons.objects.map( formatPokemon ));

            _loadingError = null;
            _offset += 12;
            TasksStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;
