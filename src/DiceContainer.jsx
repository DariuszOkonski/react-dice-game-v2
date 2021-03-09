import React, { Component } from 'react';
import Dice from './Dice';

const dices = ['one', 'two', 'three', 'four', 'five', 'six']

class DiceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice1: 'one',
            dice2: 'two',
            rolling: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    getRandomDice() {
        return dices[Math.floor(Math.random() * dices.length)]
    }

    handleClick() {
        console.log(this.getRandomDice())
        this.setState({
            dice1: this.getRandomDice(),
            dice2: this.getRandomDice(),
            rolling: true
        })

        setTimeout(() => {
            this.setState({
                rolling: false
            })
        }, 2000);
    }

    render() { 
        return ( 
            <div>
                <div className="container">
                    <Dice name={this.state.dice1} />
                    <Dice name={this.state.dice2} />
                </div>
                <button onClick={this.handleClick}>{this.state.rolling ? 'Rolling...' : 'Roll Dices!!!'}</button>
            </div>
         );
    }
}
 
export default DiceContainer;