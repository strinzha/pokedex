import React from 'react';
import './App.scss';

import PokedexStore from '../stores/PokedexStore';
import PokedexActions from '../actions/PokedexActions';

import PokemonLoader from './PokemonLoader.jsx';
import PokemonList from './PokemonList.jsx';
import PokemonCharacteristics from './PokemonCharacteristics.jsx';

function getStateFromFlux() {
  return {isLoading: PokedexStore.isLoading(), pokemons: PokedexStore.getPokemons(), characteristics: PokedexStore.getCharacteristics(), offset: PokedexStore.getOffset()};
}

const App = React.createClass({
  getInitialState() {
    return getStateFromFlux();
  },

  componentWillMount() {
    PokedexActions.loadPokemons();
  },

  componentDidMount() {
    PokedexStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    PokedexStore.removeChangeListener(this._onChange);
  },
  handleLoadCharacteristics(pokemon) {
    PokedexActions.loadCharacteristics(pokemon.id);
  },
  handleLoadMore() {
    PokedexActions.loadMore(this.state.offset);
  },
  render() {       
    return (
      <div className='App'>
        {this.state.isLoading ? <PokemonLoader /> : null}        
        <div className="App__title">Pokedex</div>
        <PokemonList pokemons={this.state.pokemons} onLoadCharacteristics={this.handleLoadCharacteristics} onLoadMore={this.handleLoadMore} />
        {this.state.characteristics.length !== 0 ? <PokemonCharacteristics characteristics={this.state.characteristics} /> : null}
      </div>
    );
  },
  _onChange() {
    this.setState(getStateFromFlux());
  }
});
export default App;
