import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const PokedexActions = {
  loadPokemons() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_POKEMONS_REQUEST
        });

        api.listPokemons()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_POKEMONS_SUCCESS,
                pokemons: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_POKEMONS_FAIL,
                error: err
            })
        );
    },
    loadCharacteristics(id) {
      AppDispatcher.dispatch({
        type: Constants.LOAD_CHARACTERISTICS_REQUEST
      });
      api.listCharacteristics(id)
      .then(({ data }) =>
          AppDispatcher.dispatch({
              type: Constants.LOAD_CHARACTERISTICS_SUCCESS,
              characteristics: data
          })
      )
      .catch(err =>
          console.error(err)
      );
    },
    loadMore(offset) {
      AppDispatcher.dispatch({
        type: Constants.LOAD_MORE_REQUEST
      });
      api.listMorePokemons(offset)
      .then(({ data }) =>
          AppDispatcher.dispatch({
              type: Constants.LOAD_MORE_SUCCESS,
              pokemons: data
          })
      )
      .catch(err =>
          console.error(err)
      );
    }
};
export default PokedexActions;
