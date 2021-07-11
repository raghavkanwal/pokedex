import './App.css';
import { PropTypes } from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import Button from '@material-ui/core/Button';

const Title = styled.h1`
  text-align: center;
`

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-column-gap: 1rem;
`

const Input = styled.input`
  width:100%;
  font-size: x-large;
  padding:0.2rem;
`

const PokemonRow = ({pokemon, onSelect}) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td><Button color="primary" variant="contained" onClick={() => onSelect(pokemon)} >Select!</Button></td>
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
  const [pokemon, pokemonSet] = React.useState([]);
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:3000/pokedex/pokemon.json')
      .then(response => response.json())
      .then(data => pokemonSet(data));
  }, []);

  return (
    <div className="app">
      <Title>Search Pokemon</Title>  

      <Input type="text" value={filter} onChange={(evt) => filterSet(evt.target.value)} />

      <TwoColumnLayout>
          <table className="pokemon-registry">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {
                pokemon.filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase())).map((pokemon) => (
                  <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => { selectedPokemonSet(pokemon)}}/>
                ))
              }
            </tbody>
          </table>
          {selectedPokemon && <PokemonInfo {...selectedPokemon}/>}
      </TwoColumnLayout>
      
    </div>
  );
}

export default App;
