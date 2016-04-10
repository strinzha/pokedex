import React from 'react';
import PokemonType from './PokemonType.jsx';
import './PokemonTypes.scss';
const PokemonTypes = React.createClass({
    render() {
        return (
            <div className="PokemonTypes">
                {this.props.types.map((type, key) => <PokemonType key={key} name={type.name}/>)
}
            </div>
        );
    }
});

export default PokemonTypes;
