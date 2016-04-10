import React from 'react';
import './PokemonList.scss';

import Pokemon from './Pokemon.jsx';
import PokemonMore from './PokemonMore.jsx';

const PokemonList = React.createClass({
    render() {
        const onLoadCharacteristics = this.props.onLoadCharacteristics;
        const onLoadMore = this.props.onLoadMore;
        return (
            <div className="PokemonList">
                {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} id={pokemon.id} title={pokemon.title} types={pokemon.types} onCharacteristics={this.props.onLoadCharacteristics.bind(null, pokemon)}/>)
}
                <PokemonMore onLoadMore={this.props.onLoadMore}/>
            </div>
        );
    }
});
export default PokemonList;
