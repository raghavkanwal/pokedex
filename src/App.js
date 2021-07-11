import './App.css';
import pokemonList from './assets/data/pokemon.json';
import { PropTypes } from 'prop-types';
import React from 'react';

const PokemonRow = ({pokemon, onSelect}) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td><button onClick={() => onSelect(pokemon)}>Select</button></td>
  </tr>
)

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english: PropTypes.string
    }),
    type: PropTypes.arrayOf(PropTypes.string)
  }),
  onSelect: PropTypes.func
}

const PokemonInfo = ({name, base}) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      <tbody>
      {
        Object.keys(base).map(key => (
          <tr key={key}>
            <td>{key}: </td>
            <td>{base[key]}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  </div>
)

PokemonInfo.propTypes = {
  name: PropTypes.shape({
    english: PropTypes.string
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,

  })
}

function App() {
  const [filter, filterSet] = React.useState("");
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);

  return (
    <div className="app">
      <h1>Search Pokemon</h1>  

      <input type="text" value={filter} onChange={(evt) => filterSet(evt.target.value)}></input>

      <div style={{
        display: "grid",
        gridTemplateColumns:"60% 40%",
        gridColumnGap: "1rem"
      }}>
          <table className="pokemon-registry">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {
                pokemonList.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).map((pokemon) => (
                  <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => { selectedPokemonSet(pokemon)}}/>
                ))
              }
            </tbody>
          </table>

          {selectedPokemon && <PokemonInfo {...selectedPokemon}/>}
      </div>
      
    </div>
  );
}

export default App;
