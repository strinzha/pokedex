import React from 'react';
import './PokemonType.scss';
const PokemonType = React.createClass({
  render() {
    return (
      <div className="PokemonType">
        {this.props.name}
      </div>
    );
  }
});
export default PokemonType;
