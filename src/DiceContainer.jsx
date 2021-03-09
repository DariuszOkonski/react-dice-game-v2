import React, { Component } from 'react';
import Dice from './Dice';

const dices = ['one', 'two', 'three', 'four', 'five', 'six']

class DiceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dice1: 'one',
            dice2: 'one',
            rolling: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    getRandomDice() {
        return dices[Math.floor(Math.random() * dices.length)]
    }

    handleClick() {
        this.setState({
            dice1: this.getRandomDice(),
            dice2: this.getRandomDice(),
            rolling: true
        })

        setTimeout(() => {
            this.setState({
                rolling: false
            })
        }, 1000);
    }

    render() { 
        return ( 
            <div>
                <div className="container">
                    <Dice name={this.state.dice1} rolling={this.state.rolling} />
                    <Dice name={this.state.dice2} rolling={this.state.rolling} />
                </div>
                <button disabled={this.state.rolling} onClick={this.handleClick}>{this.state.rolling ? 'Rolling...' : 'Roll Dices!!!'}</button>
            </div>
         );
    }
}
 
export default DiceContainer;