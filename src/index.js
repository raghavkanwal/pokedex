import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame';

const POKEMON = [
    {
        id: 4, name: "Charmander", type: "fire", base_experience: 62
    },
    {
        id: 7, name: "Squirtle", type: "water", base_experience: 63
    },
    {
        id: 11, name: "Metapod", type: "bug", base_experience: 72
    },
    {
        id: 12, name: "Butterfree", type: "flying", base_experience: 178
    },
    {
        id: 25, name: "Pikachu", type: "electric", base_experience: 112
    },
    {
        id: 39, name: "Jigglypuff", type: "normal", base_experience: 95
    },
    {
        id: 133, name: "Eevee", type: "normal", base_experience: 65
    }
];

class App extends Component {
    render() {
        return (
            <div className="App" style={{fontSize: 0}}>
                {/* <Pokedex pokemon={POKEMON}/> */}
                <Pokegame pokemon={POKEMON} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
