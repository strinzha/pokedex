import React from 'react';
import  './Pokemon.scss';
import PokemonTypes from './PokemonTypes.jsx';

const Pokemon = React.createClass({
  render() {
        return (
            <div className='Pokemon' onClick={this.props.onCharacteristics}>
              <img className='Pokemon__image' src={`http://pokeapi.co/media/img/${this.props.id}.png`} />
              <div className="Pokemon__title">{this.props.title}</div>
              <PokemonTypes types={this.props.types} id={this.props.id} />
            </div>
        );
    }
});
export default Pokemon;
