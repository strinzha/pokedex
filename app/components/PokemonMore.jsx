import React from 'react';
import './PokemonMore.scss';

const PokemonMore = React.createClass({
    render() {
        return (
            <div className='PokemonMore'>
                <span className='PokemonMore__button' onClick={this.props.onLoadMore}>Load More</span>
            </div>
        );
    }
});
export default PokemonMore;
