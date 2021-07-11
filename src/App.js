import './App.css';
import pokemonList from './assets/data/pokemon.json';

const PokemonRow = ((pokemon) => (
  <tr>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(', ')}</td>
  </tr>
))

function App() {
  return (
    <div className="app">
      <h1>Search Pokemon</h1>  

      <table className="pokemon-registry">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemonList.map((pokemon) => (
              <PokemonRow key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
