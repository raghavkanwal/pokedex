import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokegame.css';

class Pokegame extends Component {
    render() {

        const { pokemon } = this.props;
        
        let hand1 = new Set(), hand2 = new Set();
        
        while(hand1.size < 4) {
            hand1.add(pokemon[Math.floor(Math.random() * pokemon.length)])
        }
        
        while(hand2.size < 4) {
            hand2.add(pokemon[Math.floor(Math.random() * pokemon.length)])
        }
        

        const hand1sum = ([...hand1].map(el => el.base_experience)).reduce((a,b) => a+ b,0);
        const hand2sum = ([...hand2].map(el => el.base_experience)).reduce((a,b) => a+ b,0);
        
        const hand1Condition = hand1sum > hand2sum ? true : false;
        const hand2Condition = hand1sum < hand2sum ? true : false;

        console.log()
        return (
            <div className="Pokegame">
                <div className="hand1">
                <h3 className="game-condition"> {hand1Condition} {hand1Condition ? "Winning Hand" : "Losing Hand"} </h3>
                <h3 className="game-condition"> {hand1sum}</h3>
                    {[...hand1].map(hand => <Pokecard key={hand.id} pokemon={hand}></Pokecard>)}
                </div>
                <div className="hand2">
                <h3 className="game-condition {isWinning ? 'win-condition' : 'lose-condition'}"> {hand2Condition} {hand2Condition ? "Winning Hand" : "Losing Hand"} </h3>
                <h3 className="game-condition"> {hand2sum}</h3>
                {[...hand2].map(hand => <Pokecard key={hand.id} pokemon={hand}></Pokecard>)}
                </div>
            </div>
        )
    }
}

export default Pokegame;