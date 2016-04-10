import React from 'react';
import './PokemonLoader.scss';

const PokemonLoader = React.createClass({
  render() {    
        return (
        <div className="PokemonLoader">
          <div className="PokemonLoader__spinner">
            <div className="PokemonLoader__cube1"></div>
            <div className="PokemonLoader__cube2"></div>
          </div>                    
        </div>
        );
    }
});
export default PokemonLoader;
