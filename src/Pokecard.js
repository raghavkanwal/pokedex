import React, { Component } from 'react';
import './Pokecard.css';

function imageResolver(pokemonId, isHighres = false) {
    return isHighres ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png` : `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId.padStart(3,'0')}.png`;
}
class Pokecard extends Component {
    render() {
        const { pokemon } = this.props;
        console.log(pokemon);
        return (
            <div className="Pokecard">
                <p>{pokemon.name}</p>
                <img className="Pokecard-image" alt="pokemon name" src={imageResolver(String(pokemon.id), false)} />
                <p>{pokemon.type} </p>
                <p>{pokemon.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard;