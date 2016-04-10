import React from 'react';
import './PokemonCharacteristics.scss';

const PokemonCharacteristics = React.createClass({
  render() {    
        return (
            <div className="PokemonCharacteristics">
              <div className="PokemonCharacteristics__content">
              <img className="PokemonCharacteristics__image" src={`http://pokeapi.co/media/img/${this.props.characteristics.national_id}.png`} />
              <div className="PokemonCharacteristics__title">
                {this.props.characteristics.name} #{("00" + this.props.characteristics.national_id).slice(-3)}
              </div>
              <table className="PokemonCharacteristics__table">
                <tbody>
                  <tr>
                    <td>Types:</td>
                    <td>{this.props.characteristics.types.map((type, index) => <span key={index}>{type.name}</span>)}</td>
                 </tr>
                 <tr>
                   <td>Attack:</td>
                   <td>{this.props.characteristics.attack}</td>
                </tr>
                <tr>
                  <td>Defense:</td>
                  <td>{this.props.characteristics.defense}</td>
                </tr>
                <tr>
                  <td>HP:</td>
                  <td>{this.props.characteristics.hp}</td>
                </tr>
                <tr>
                  <td>SP Attack:</td>
                  <td>{this.props.characteristics.sp_atk}</td>
                </tr>
                <tr>
                  <td>SP Defense:</td>
                  <td>{this.props.characteristics.sp_def}</td>
                </tr>
                <tr>
                  <td>Speed:</td>
                  <td>{this.props.characteristics.speed}</td>
                </tr>
                <tr>
                  <td>Weight:</td>
                  <td>{this.props.characteristics.weight}</td>
                </tr>
                <tr>
                  <td>Total moves:</td>
                  <td>{this.props.characteristics.moves.length}</td>
                </tr>                
              </tbody>
              </table>
            </div>
            </div>
        );
    }
});
export default PokemonCharacteristics;
