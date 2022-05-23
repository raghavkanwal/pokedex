import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        const { pokemon } = this.props;
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div className="Pokedex-listing">
                    {pokemon.map(pokemon => <Pokecard key={`${pokemon.name}-${pokemon.id}`} pokemon={pokemon} />)}
                </div>
            </div>
        )
    }
}

export default Pokedex;